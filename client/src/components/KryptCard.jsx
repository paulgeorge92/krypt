import { SiEthereum } from "react-icons/si";

import { BsInfoCircle } from "react-icons/bs";
const KryptCard = ({classProps, address})=>{
    return (
        <div className={`${classProps} eth-card white-glassmorphism`}>
            <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                        <SiEthereum fontSize={21} color="#fff"></SiEthereum>
                    </div>
                    <BsInfoCircle fontSize={17} color="#fff"></BsInfoCircle>
                </div>
                <div>
                    <p className="text-white font-lisght text-sm">{address || 'Address'}</p>
                    <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
                </div>
            </div>
        </div>
    )
}

export default KryptCard;