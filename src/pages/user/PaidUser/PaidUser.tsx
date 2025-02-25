import HeaderPaidUser from "../../../components/user/PaidUser/HeaderPaidUser"
import StepPaidUser from "../../../components/user/PaidUser/StepPaidUser"
import BodyPaidUser from "../../../components/user/PaidUser/BodyPaidUser"
import FooterPaidUser from "../../../components/user/PaidUser/FooterPaidUser"

export default function PaidUser(){
    return(
        <>
        <HeaderPaidUser/>
        <div className="w-[95%] mt-20 border-t border-[#04843c] mx-auto" />
        <StepPaidUser/>
        <BodyPaidUser/>
        <FooterPaidUser/> 
        </>
    )
}