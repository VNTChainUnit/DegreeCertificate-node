import { DubboProvider, dubbo } from '@dazejs/dubbo-provider';
import BlocckChainService from '../service/blockchain/main';
import dubboConfig from '../../config/dubbo'
@dubbo.registry('default')
@dubbo.interface('com.xinyi.dc.blockchain.node.BlockChain')
@dubbo.ip(dubboConfig.default.ip)
export default class extends DubboProvider {

  @dubbo.method()
  hello(name){
    return `Hello ${name}`;
  }

  @dubbo.method()
  async getCertificate(certificateNumber  , idnumber  ) {
     var res  = await BlocckChainService.getCertificate(certificateNumber, idnumber);
    return res;
  }

  @dubbo.method()
  async addCertificate(school  , name  , idnumber  , degreeType  , major  , graduationDate  , studentNumber  , certificateNumber  ) {
    var res = await BlocckChainService.addCertificate(school, name, idnumber, degreeType, major, graduationDate, studentNumber, certificateNumber);
    if (!res) res = "";
    return res;
  }

  @dubbo.method()
  async existCertificate(name  , studentNumber  , school  , idnumber  ) {
    var res = await BlocckChainService.existCertificate(name, studentNumber, school, idnumber);
    return res;
  }

  @dubbo.method()
  async checkCertificate(certificateNumber  , name  , school  , degreeType  , graduationDate  , major  ) {
    var res = await BlocckChainService.checkCertificate(certificateNumber, name, school, degreeType, graduationDate, major);
    return res;
  }

  @dubbo.method()
  async getTransactionNumber(transactionHash  ) {
    var tx = await BlocckChainService.getTransaction(transactionHash);
    return tx['blockNumber'];
  }


}