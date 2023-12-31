import { Button } from "@/components/ui/button";
import TitleSection from "./_components/title-section";
import Image from "next/image";

import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/constants";

import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CardAvatar from "./_components/card-avatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import AppBanner from "../../../public/app-banner.png";
import CalBanner from "../../../public/cal-banner.png";
import DiamondIcon from "../../../public/icons/diamond.svg";
import CheckIcon from "../../../public/icons/check.svg";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <TitleSection
          title="All-In-One Collaboration and Productivity Platform"
          pill="✨ Your Workspace, Perfected"
        />
        <div className="bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]">
          <Button
            variant="btn-secondary"
            className="w-full rounded-[10px] p-6 text-2xl bg-background"
          >
            Get Cypress Free
          </Button>
        </div>
        <div className="md:mt-[-90px] sm:w-full  w-[750px] flex  justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]">
          <Image src={AppBanner} alt="Application Banner" />

          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute"></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="
            overflow-hidden 
            flex 
            after:absolute
            after:content['']
            after:dark:from-brand-dark
            after:to-transparent
            after:from-background
            after:bg-gradient-to-t
            after:right-0
            after:bottom-0
            after:w-20
            after:z-10

            before:absolute
            before:content['']
            before:dark:from-brand-dark
            before:to-transparent
            before:from-background
            before:bg-gradient-to-t
            before:right-0
            before:bottom-0
            before:w-20
            before:z-10
            "
        >
          {[...Array(2)].map((arr) => (
            <div key={arr} className="flex flex-nowrap animate-slide">
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="flex items-center relative w-[200px] m-20 shrink-0"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={140}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="flex items-center justify-center flex-col relative px-4 sm:px-6">
        <div className="w-[30%] blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-10 top-22"></div>
        <TitleSection
          title="Keep track of your mettings all in one place"
          subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
          pill="Features"
        />
        <div className="flex items-center justify-center relative mt-10 max-w-[450px] sm:ml-0 rounded-2xl border-8 border-washed-purple-300 border-opacity-10">
          <Image
            src={CalBanner}
            alt="Calendar Banner"
            className="rounded-2xl"
          />
        </div>
      </section>
      <section className="relative">
        <div className="w-full blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-10 top-56"></div>
        <div className="flex flex-col mt-20 px-4 sm:px-6 overflow-x-hidden overflow-visible">
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
          personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, idx) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": idx === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": idx === 1,
                  "ml-[100vw]": idx === 1,
                }),
                "hover:paused",
              )}
            >
              {USERS.map((user, idx) => (
                <CardAvatar
                  key={user.name}
                  className="w-[500px] shrink-0 rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background"
                  cardHeader={
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={`/avatars/${idx + 1}.png`}
                          alt={`${user.name} avatar`}
                        />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {user.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {user.name.toLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {user.message}
                    </p>
                  }
                ></CardAvatar>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 px-4 sm:px-6">
        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />
        <div className="flex items-center flex-col-reverse justify-center sm:flex-row sm:items-stretch gap-4 mt-10">
          {PRICING_CARDS.map((card) => (
            <CardAvatar
              key={card.planType}
              className={cn(
                "w-[300px] rounded-2xl dark:bg-black/40 background-blur-3xl relative",
                card.planType === PRICING_PLANS.proplan &&
                  "border-brand-primaryPurple/70",
              )}
              cardHeader={
                <CardTitle
                  className="text-2xl
                  font-semibold
              "
                >
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div
                        className="hidden dark:block w-full blur-[120px] rounded-full h-32
                        absolute
                        bg-brand-primaryPurple/80
                        -z-10
                        top-0
                      "
                      />
                      <Image
                        src={DiamondIcon}
                        alt="Pro Plan Icon"
                        className="absolute top-6 right-6"
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span
                    className="font-normal 
                    text-2xl
                "
                  >
                    ${card.price}
                  </span>
                  {+card.price > 0 ? (
                    <span className="dark:text-washed-purple-800 ml-1">
                      /mo
                    </span>
                  ) : (
                    ""
                  )}
                  <p className="dark:text-washed-purple-800">
                    {card.description}
                  </p>
                  <Button
                    variant="btn-primary"
                    className="whitespace-nowrap w-full mt-4"
                  >
                    {card.planType === PRICING_PLANS.proplan
                      ? "Go Pro"
                      : "Get Started"}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="font-normal
                  flex
                  mb-2
                  flex-col
                  gap-4
                "
                >
                  <small>{card.highlightFeature}</small>
                  {card.freatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex
                      items-center
                      gap-2
                    "
                    >
                      <Image src={CheckIcon} alt="Check Icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
}
