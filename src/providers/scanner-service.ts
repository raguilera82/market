import { BarcodeScanner } from 'ionic-native';

export class ScannerService {

  constructor() {}

  scanner(): Promise<any> {
    return BarcodeScanner.scan();
  }

}
