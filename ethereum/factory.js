import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb1dB872D1CdC274366f3c6A55C89096B50e24b9c'
);

export default instance;