import { DubboProvider, dubbo } from '@dazejs/dubbo-provider';
import BlocckChainService from './blockchain/main';

@dubbo.registry('default')
@dubbo.interface('com.xinyi.dc.blockchain.node.BlockChain')
export default class extends DubboProvider {

  @dubbo.method()
  hello(name: string) {
    return `Hello ${name}`;
  }

  @dubbo.method()
  async getCertificate(certificateNumber: string, idnumber: string) {
    var res: string = await BlocckChainService.getCertificate(certificateNumber, idnumber);
    return res;
  }

  @dubbo.method()
  async addCertificate(school: string, name: string, idnumber: string, degreeType: string, major: string, graduationDate: string, studentNumber: string, certificateNumber: string) {
    var res = await BlocckChainService.addCertificate(school, name, idnumber, degreeType, major, graduationDate, studentNumber, certificateNumber);
    if (!res) res = "";
    return res;
  }

  @dubbo.method()
  async existCertificate(name: string, studentNumber: string, school: string, idnumber: string) {
    var res = await BlocckChainService.existCertificate(name, studentNumber, school, idnumber);
    return res;
  }

  @dubbo.method()
  async checkCertificate(certificateNumber: string, name: string, school: string, degreeType: string, graduationDate: string, major: string) {
    var res = await BlocckChainService.checkCertificate(certificateNumber, name, school, degreeType, graduationDate, major);
    return res;
  }

  @dubbo.method()
  async getTransactionNumber(transactionHash: string) {
    var tx = await BlocckChainService.getTransaction(transactionHash);
    return tx['blockNumber'];
  }


}