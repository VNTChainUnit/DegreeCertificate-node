import { DubboProvider, dubbo } from '@dazejs/dubbo-provider';
import BlocckChainService from '../service/blockchain/main';
import dubboConfig from '../../config/dubbo'
import utils from '../service/utils'
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
     var certificateres  = await BlocckChainService.getCertificate(certificateNumber, idnumber);
     let dataarr=certificateres.split("|")
     //对每个字段解密
     let certificate={
     "school":utils.aesDecrypt(dataarr[0]),
     "name":utils.aesDecrypt(dataarr[1]),
     "idnumber":utils.aesDecrypt(dataarr[2]),
     "degreeType":utils.aesDecrypt(dataarr[3]),
     "major":utils.aesDecrypt(dataarr[4]),
     "graduationDate":utils.aesDecrypt(dataarr[5]),
     "studentNumber":utils.aesDecrypt(dataarr[6]),
     "certificateNumber":utils.aesDecrypt(dataarr[7])
     }
     let res = JSON.stringify(certificate);
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