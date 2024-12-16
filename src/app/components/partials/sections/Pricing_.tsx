import { FunctionComponent } from "react";
import Illustration from "../../shared/Illustration";
import Tag from "../../shared/Tag";
import Heading from "../../shared/Heading";
import pigPerson from "@/assets/pricing/pigPerson.png";
import Image from "next/image";
import UlDot from "../../shared/UlDot";
import Button from "../../shared/Button";
import PricingCardItem from "./pricing/Card";
import CardSection from "../../shared/CardSection";

interface PricingProps {}

const Pricing: FunctionComponent<PricingProps> = () => {
  return (
    <CardSection.Wrap id="pricing">
      <CardSection.Content.Wrap>
        <CardSection.Content.Text label="Pricing">
          <Heading>Select a membership level the right price for you.</Heading>
          <p className="space-x-2 *:tracking-tiny lg:space-x-0">
            <span className="lg:block">
              Prices listed in USD. Taxes may apply.
            </span>
            <span className="lg:block lg:whitespace-nowrap">
              By using program you agree to our terms and policies.
            </span>
          </p>
        </CardSection.Content.Text>
        <CardSection.Content.Image
          src={pigPerson.src}
          alt="Person with pig"
          aspect="14/15"
          widths={{ DEFAULT: 280, lg: 380 }}
        />
      </CardSection.Content.Wrap>
      <CardSection.ListWrap>
        <ul className="space-y-6 lg:flex lg:justify-between lg:gap-6 lg:space-y-0 lg:*:flex-1 xl:gap-10 2xl:gap-25.5">
          <PricingCardItem.Wrap theme={"outline"}>
            <PricingCardItem.Content>
              <PricingCardItem.Header>
                <PricingCardItem.HeaderPrice>49</PricingCardItem.HeaderPrice>
                <PricingCardItem.HeaderDescription>
                  <span>A pay-once license,</span>
                  <span>just for you</span>
                </PricingCardItem.HeaderDescription>
              </PricingCardItem.Header>

              <UlDot.Ul>
                <UlDot.Li>The Mac app</UlDot.Li>
                <UlDot.Li>Beautiful White_level</UlDot.Li>
                <UlDot.Li>One year of saving</UlDot.Li>
              </UlDot.Ul>
            </PricingCardItem.Content>
            <PricingCardItem.WrapButton>
              <Button theme={"dark"} width={"full"}>
                Join
              </Button>
            </PricingCardItem.WrapButton>
          </PricingCardItem.Wrap>

          <PricingCardItem.Wrap theme={"dark"}>
            <PricingCardItem.Content>
              <PricingCardItem.Header>
                <PricingCardItem.HeaderPrice>99</PricingCardItem.HeaderPrice>
                <PricingCardItem.HeaderDescription>
                  <span>Pro account,</span>
                  <span>just for you</span>
                </PricingCardItem.HeaderDescription>
              </PricingCardItem.Header>

              <UlDot.Ul>
                <UlDot.Li>The Mac app</UlDot.Li>
                <UlDot.Li>One year of Mac app</UlDot.Li>
                <UlDot.Li>One year of saving</UlDot.Li>
                <UlDot.Li>A personal Cloud</UlDot.Li>
                <UlDot.Li>All tools, just for you</UlDot.Li>
              </UlDot.Ul>
            </PricingCardItem.Content>
            <PricingCardItem.WrapButton>
              <Button theme={"light"} width={"full"}>
                Join
              </Button>
            </PricingCardItem.WrapButton>
          </PricingCardItem.Wrap>

          <PricingCardItem.Wrap theme={"light"}>
            <PricingCardItem.Content>
              <PricingCardItem.Header>
                <PricingCardItem.HeaderPrice>299</PricingCardItem.HeaderPrice>
                <PricingCardItem.HeaderDescription>
                  <span>A subscription</span>
                  <span>for the whole team</span>
                </PricingCardItem.HeaderDescription>
              </PricingCardItem.Header>

              <UlDot.Ul>
                <UlDot.Li>Access to the Mac app</UlDot.Li>
                <UlDot.Li>Cloud workspace</UlDot.Li>
                <UlDot.Li>Free Cloud access</UlDot.Li>
                <UlDot.Li>Easy team management</UlDot.Li>
                <UlDot.Li>No license key required</UlDot.Li>
              </UlDot.Ul>
            </PricingCardItem.Content>
            <PricingCardItem.WrapButton>
              <Button theme={"dark"} width={"full"}>
                Join
              </Button>
            </PricingCardItem.WrapButton>
          </PricingCardItem.Wrap>
        </ul>
      </CardSection.ListWrap>
    </CardSection.Wrap>
  );

  return (
    <section id="pricing" className="space-y-5 lg:space-y-14.5">
      {/*  */}
      <div className="space-y-10 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-20 lg:space-y-0 xl:items-center xl:gap-18">
        <div className="space-y-10 lg:flex lg:max-w-[496px] lg:flex-col lg:items-end xl:max-w-[739px]">
          <Tag>Pricing</Tag>
          <div className="space-y-5 lg:text-right">
            <Heading>
              Select a membership level the right price for you.
            </Heading>
            <p className="space-x-2 *:tracking-tiny lg:space-x-0">
              <span className="lg:block">
                Prices listed in USD. Taxes may apply.
              </span>
              <span className="lg:block lg:whitespace-nowrap">
                By using program you agree to our terms and policies.
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative h-[298px] w-[280px] lg:h-[404px] lg:w-[380px] xl:h-[495px] xl:w-[464px]">
            <Image src={pigPerson.src} fill alt="pig person" />
          </div>
        </div>
      </div>
      {/*  */}
      <ul className="space-y-6 lg:flex lg:justify-between lg:gap-6 lg:space-y-0 lg:*:flex-1 xl:gap-10 2xl:gap-25.5">
        <PricingCardItem.Wrap theme={"outline"}>
          <PricingCardItem.Content>
            <PricingCardItem.Header>
              <PricingCardItem.HeaderPrice>49</PricingCardItem.HeaderPrice>
              <PricingCardItem.HeaderDescription>
                <span>A pay-once license,</span>
                <span>just for you</span>
              </PricingCardItem.HeaderDescription>
            </PricingCardItem.Header>

            <UlDot.Ul>
              <UlDot.Li>The Mac app</UlDot.Li>
              <UlDot.Li>Beautiful White_level</UlDot.Li>
              <UlDot.Li>One year of saving</UlDot.Li>
            </UlDot.Ul>
          </PricingCardItem.Content>
          <PricingCardItem.WrapButton>
            <Button theme={"dark"} width={"full"}>
              Join
            </Button>
          </PricingCardItem.WrapButton>
        </PricingCardItem.Wrap>

        <PricingCardItem.Wrap theme={"dark"}>
          <PricingCardItem.Content>
            <PricingCardItem.Header>
              <PricingCardItem.HeaderPrice>99</PricingCardItem.HeaderPrice>
              <PricingCardItem.HeaderDescription>
                <span>Pro account,</span>
                <span>just for you</span>
              </PricingCardItem.HeaderDescription>
            </PricingCardItem.Header>

            <UlDot.Ul>
              <UlDot.Li>The Mac app</UlDot.Li>
              <UlDot.Li>One year of Mac app</UlDot.Li>
              <UlDot.Li>One year of saving</UlDot.Li>
              <UlDot.Li>A personal Cloud</UlDot.Li>
              <UlDot.Li>All tools, just for you</UlDot.Li>
            </UlDot.Ul>
          </PricingCardItem.Content>
          <PricingCardItem.WrapButton>
            <Button theme={"light"} width={"full"}>
              Join
            </Button>
          </PricingCardItem.WrapButton>
        </PricingCardItem.Wrap>

        <PricingCardItem.Wrap theme={"light"}>
          <PricingCardItem.Content>
            <PricingCardItem.Header>
              <PricingCardItem.HeaderPrice>299</PricingCardItem.HeaderPrice>
              <PricingCardItem.HeaderDescription>
                <span>A subscription</span>
                <span>for the whole team</span>
              </PricingCardItem.HeaderDescription>
            </PricingCardItem.Header>

            <UlDot.Ul>
              <UlDot.Li>Access to the Mac app</UlDot.Li>
              <UlDot.Li>Cloud workspace</UlDot.Li>
              <UlDot.Li>Free Cloud access</UlDot.Li>
              <UlDot.Li>Easy team management</UlDot.Li>
              <UlDot.Li>No license key required</UlDot.Li>
            </UlDot.Ul>
          </PricingCardItem.Content>
          <PricingCardItem.WrapButton>
            <Button theme={"dark"} width={"full"}>
              Join
            </Button>
          </PricingCardItem.WrapButton>
        </PricingCardItem.Wrap>
      </ul>
    </section>
  );
};

export default Pricing;
