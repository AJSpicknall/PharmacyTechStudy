const practiceTitle = "Order Entry & Processing";
const practiceStorageKey = "pharmacyTechPracticeBest:order-entry";
const practiceQuestions = [
  {
    "question": "What does the Sig abbreviation 'bid' mean?",
    "answer": "Twice daily",
    "pool": [
      "Once daily",
      "Twice daily",
      "Three times daily",
      "At bedtime"
    ],
    "detail": "bid comes from the Latin bis in die and means twice daily."
  },
  {
    "question": "What does 'tid' mean in prescription directions?",
    "answer": "Three times daily",
    "pool": [
      "Twice daily",
      "Three times daily",
      "Four times daily",
      "Every other day"
    ],
    "detail": "tid means three times daily."
  },
  {
    "question": "What does 'prn' mean?",
    "answer": "As needed",
    "pool": [
      "Before meals",
      "As needed",
      "After meals",
      "At bedtime"
    ],
    "detail": "prn means as needed."
  },
  {
    "question": "Which device is most appropriate for accurately measuring a small oral liquid dose for an infant?",
    "answer": "Oral syringe",
    "pool": [
      "Household teaspoon",
      "Oral syringe",
      "Graduated cylinder for compounding",
      "Insulin syringe"
    ],
    "detail": "An oral syringe provides accurate measurement of small oral liquid doses and avoids accidental injection associated with parenteral syringes."
  },
  {
    "question": "Which accessory can improve delivery of medication from a metered-dose inhaler?",
    "answer": "Spacer",
    "pool": [
      "Spacer",
      "Lancet",
      "Nebulizer mask only",
      "Filter needle"
    ],
    "detail": "A spacer or valved holding chamber helps coordinate inhalation and medication delivery from a metered-dose inhaler."
  },
  {
    "question": "Which identifier is used to distinguish a specific manufactured drug product and package?",
    "answer": "NDC number",
    "pool": [
      "DEA number",
      "NDC number",
      "BIN number",
      "Rx number only"
    ],
    "detail": "The National Drug Code identifies a marketed drug product, including labeler, product, and package information."
  },
  {
    "question": "Why is the lot number important in pharmacy inventory?",
    "answer": "It identifies a manufacturing batch for tracing and recalls",
    "pool": [
      "It determines the copay",
      "It identifies a manufacturing batch for tracing and recalls",
      "It identifies the prescriber",
      "It replaces the expiration date"
    ],
    "detail": "Lot numbers allow a specific manufacturing batch to be traced, which is especially important during recalls."
  },
  {
    "question": "What should generally happen to an expired medication in active inventory?",
    "answer": "Remove it from dispensable stock",
    "pool": [
      "Dispense it first",
      "Remove it from dispensable stock",
      "Change the expiration date",
      "Mix it with newer stock"
    ],
    "detail": "Expired medication should be removed from active dispensable inventory and handled under the pharmacy's return/disposal procedure."
  },
  {
    "question": "What is reverse distribution used for?",
    "answer": "Sending eligible unusable or expired products back through an authorized return channel",
    "pool": [
      "Sending eligible unusable or expired products back through an authorized return channel",
      "Delivering prescriptions to patients",
      "Submitting insurance claims",
      "Ordering Schedule II drugs"
    ],
    "detail": "Reverse distributors manage returns and disposition of eligible expired, recalled, or otherwise unusable pharmaceutical inventory."
  },
  {
    "question": "Which item is a key legal element of a prescription?",
    "answer": "Drug name and strength",
    "pool": [
      "Patient's favorite pharmacy",
      "Drug name and strength",
      "Patient's employer",
      "Technician initials before entry"
    ],
    "detail": "A valid prescription includes core information such as patient information, drug, strength, directions, quantity, date, and prescriber information."
  },
  {
    "question": "The Roman numeral 'ii' means:",
    "answer": "2",
    "pool": [
      "1",
      "2",
      "3",
      "4"
    ],
    "detail": "In Roman numerals, ii equals 2."
  },
  {
    "question": "What does 'po' mean in a Sig?",
    "answer": "By mouth",
    "pool": [
      "By mouth",
      "Into the eye",
      "Under the tongue",
      "Into the ear"
    ],
    "detail": "po means by mouth, from the Latin per os."
  },
  {
    "question": "A prescription label says '1 tab po qhs.' What does the patient do?",
    "answer": "Take 1 tablet by mouth at bedtime",
    "pool": [
      "Take 1 tablet by mouth at bedtime",
      "Take 1 tablet by mouth every hour",
      "Take 1 tablet under the tongue daily",
      "Take 1 tablet before each meal"
    ],
    "detail": "po means by mouth and qhs means every night at bedtime."
  },
  {
    "question": "Which supply is specifically designed to puncture the skin for blood glucose testing?",
    "answer": "Lancet",
    "pool": [
      "Spacer",
      "Lancet",
      "Oral syringe",
      "Nebulizer cup"
    ],
    "detail": "A lancet makes the small skin puncture needed to obtain a capillary blood sample for glucose testing."
  },
  {
    "question": "Which information should be checked when determining whether a stock bottle can still be dispensed?",
    "answer": "Expiration date and product integrity",
    "pool": [
      "Only the bottle color",
      "Expiration date and product integrity",
      "Only the acquisition price",
      "Only the shelf location"
    ],
    "detail": "Expiration date and product integrity are essential checks before a medication is considered dispensable."
  }
];
