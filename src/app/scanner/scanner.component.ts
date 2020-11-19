import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BeepService } from '@app/core/services/beep.service';
import Quagga from 'quagga';
// declare var Quagga: any;
// const Quagga = require('quagga');

@Component({
    selector: 'app-scanner',
    templateUrl: './scanner.component.html',
    styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements AfterViewInit {
    errorMessage: string;
    codeScanned: any;

    private lastScannedCode: string;
    private lastScannedCodeDate: number;

    constructor(private changeDetectorRef: ChangeDetectorRef, private beepService: BeepService) {}

    ngAfterViewInit(): void {
        if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
            this.errorMessage = 'getUserMedia is not supported';
            return;
        }

        Quagga.init(
            {
                inputStream: {
                    constraints: {
                        facingMode: 'environment',
                    },
                    area: {
                        // defines rectangle of the detection/localization area
                        top: '40%', // top offset
                        right: '0%', // right offset
                        left: '0%', // left offset
                        bottom: '40%', // bottom offset
                    },
                },
                decoder: {
                    readers: ['ean_reader'],
                },
            },
            (err) => {
                if (err) {
                    this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
                } else {
                    Quagga.start();
                    Quagga.onDetected((res) => {
                        this.onBarcodeScanned(res.codeResult.code);
                        // window.alert(`code: ${res.codeResult.code}`);
                    });
                }
            }
        );
    }

    onBarcodeScanned(code: string) {
        // ignore duplicates for an interval of 1.5 seconds
        const now = new Date().getTime();
        if (code === this.lastScannedCode && now < this.lastScannedCodeDate + 1500) {
            return;
        }

        // ignore unknown articles

        this.lastScannedCode = code;
        this.codeScanned = code;
        this.lastScannedCodeDate = now;
        this.beepService.beep();
        this.changeDetectorRef.detectChanges();
        console.log(this.lastScannedCode);
    }
}
