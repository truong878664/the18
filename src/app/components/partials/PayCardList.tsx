import Image from "next/image";
import { FunctionComponent } from "react";
import mVisa from "@/assets/cta/m_visa.png";
import mMastercard from "@/assets/cta/m_mastercard.png";
import mPaypal from "@/assets/cta/m_paypal.png";

interface PayCardListProps {}

const PayCardList: FunctionComponent<PayCardListProps> = () => {
  return (
    <div className="flex h-10 gap-7">
      <Image
        className="object-contain"
        src={mVisa.src}
        alt="visa"
        width={86}
        height={40}
      />
      <Image
        className="object-contain"
        src={mMastercard.src}
        alt="mastercard"
        width={60}
        height={40}
      />
      <Image
        className="object-contain"
        src={mPaypal.src}
        alt="paypal"
        width={208}
        height={40}
      />
    </div>
  );
};

export default PayCardList;
