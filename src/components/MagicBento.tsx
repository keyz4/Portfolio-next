
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import AboutMe from "./bento_components/AboutMe";
import MailMe from "./bento_components/MailMe";
import TechStack from "./bento_components/TechStack";
import Global from "./bento_components/Global";
import ContactInfo from "./bento_components/ContactInfo";

const components = [{component:<AboutMe/>, css: " overflow-hidden md:col-span-3 md:row-span-2 lg:col-span-3 lg:row-span-2 col-span-1 row-span-1 "},{component:<Global/>, css: " overflow-hidden md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 col-span-1 row-span-1"},{component:<ContactInfo/>, css: "md:col-span-2 md:row-span-1 col-span-1 row-span-1"},{component:<MailMe/>, css: "overflow-hidden md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1 col-span-1 row-span-1"},{component:<TechStack/>, css: " md:col-span-3 md:row-span-1 lg:col-span-3 lg:row-span-1 col-span-1 row-span-1"},];

export function MagicBento() {
  return (
    <BentoGrid className="h-max max-w-8xl mx-auto relative z-10">
      {components.map((component, i) => (
        <BentoGridItem
          key={i}
          component={component.component}
          className={component.css}
        />
      ))}
    </BentoGrid>
  );
}

