'use client';

import { motion } from "framer-motion";

import { LabelIcon } from "@/components/ui/label-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from '@awesome.me/kit-c9f3baaeec/icons';


const GlossaryBlock = () => {
  return (
    <section className="py-8">
       <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      >
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 md:w-1/3">
            <LabelIcon icon={<FontAwesomeIcon icon={byPrefixAndName.fas['book-font']} className="text-md text-amber-500"/>}>
              Glossary
            </LabelIcon>
            <h2 className="text-3xl font-semibold">
              <span className="text-zinc-500">But what are</span>
              <br />
              routing and cascading?
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-zinc-700 mx-auto max-w-3xl text-medium md:text-xl md:mt-8">
            Payment & payout routing selects the best provider path for each transaction using rules you define:  
            <FontAwesomeIcon icon={byPrefixAndName.far['filter']} className="text-md ml-1 mr-1 text-primary"  /> 
             conditions pinpoint the payments in scope,  
            <FontAwesomeIcon icon={byPrefixAndName.far['lightbulb-on']} className="text-md ml-1 mr-1 text-primary"/> 
             action decides how to distribute, and  
            <FontAwesomeIcon icon={byPrefixAndName.far['building-columns']} className="text-md ml-1 mr-1 text-primary"/> 
             routes specify where to send them.
            </p>
          </div>
        </div>
      </div>
      </motion.section>
    </section>
  );
};

export { GlossaryBlock };

