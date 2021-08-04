import Private from '../../private'

const abifile="Degree.abi"
const contractAddress=Private.vnt.vnt_contractAddress
const url="http://47.111.100.232:8880"
const accountPath="./owneraccount"
const accountPassword=Private.vnt.vnt_accountpwd

export default {
    abifile:abifile,
    url:url,
    contractAddress:contractAddress,
    accountPath:accountPath,
    accountPassword:accountPassword
}