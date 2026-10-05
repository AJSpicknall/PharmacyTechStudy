const practiceTitle = "Patient Safety & Quality Assurance";
const practiceStorageKey = "pharmacyTechPracticeBest:patient-safety";
const practiceQuestions = [
  {
    "question": "Which medication is commonly considered high-alert because dosing errors can cause severe harm?",
    "answer": "Insulin",
    "pool": [
      "Loratadine",
      "Insulin",
      "Amoxicillin",
      "Famotidine"
    ],
    "detail": "Insulin is a high-alert medication because dosing errors can cause dangerous hypoglycemia or hyperglycemia."
  },
  {
    "question": "Which pair is a classic look-alike/sound-alike risk?",
    "answer": "Hydralazine and hydroxyzine",
    "pool": [
      "Hydralazine and hydroxyzine",
      "Metformin and insulin",
      "Ibuprofen and aspirin",
      "Omeprazole and famotidine"
    ],
    "detail": "Hydralazine and hydroxyzine have similar names but very different uses, making them a well-known LASA pair."
  },
  {
    "question": "Which notation is safest for a dose less than 1 mg?",
    "answer": "0.5 mg",
    "pool": [
      ".5 mg",
      "0.5 mg",
      "0.50 mg",
      ".50 mg"
    ],
    "detail": "Use a leading zero for values less than 1 and avoid unnecessary trailing zeros: 0.5 mg."
  },
  {
    "question": "Which notation should be avoided because it can cause a tenfold dosing error?",
    "answer": "5.0 mg",
    "pool": [
      "5 mg",
      "0.5 mg",
      "5.0 mg",
      "5 mL"
    ],
    "detail": "A trailing zero can be missed, causing 5.0 mg to be read as 50 mg. Write 5 mg instead."
  },
  {
    "question": "Tall Man lettering is mainly used to reduce which type of error?",
    "answer": "Look-alike/sound-alike drug selection",
    "pool": [
      "Temperature excursions",
      "Look-alike/sound-alike drug selection",
      "Insurance rejection",
      "Expired inventory"
    ],
    "detail": "Tall Man lettering highlights differences in similar drug names to reduce LASA selection errors."
  },
  {
    "question": "A technician notices a possible drug interaction while entering a prescription. What is the appropriate next step?",
    "answer": "Refer the issue to the pharmacist",
    "pool": [
      "Change the drug",
      "Ask the patient to decide",
      "Refer the issue to the pharmacist",
      "Ignore the alert"
    ],
    "detail": "Potential drug interactions require pharmacist evaluation; technicians should identify and escalate the concern."
  },
  {
    "question": "Which program is used to report serious adverse events and product problems involving FDA-regulated medical products?",
    "answer": "MedWatch",
    "pool": [
      "VAERS",
      "MedWatch",
      "DSCSA",
      "CMEA"
    ],
    "detail": "FDA MedWatch is used for reporting serious adverse events and product quality problems for many FDA-regulated medical products."
  },
  {
    "question": "Which system is specifically used for reporting adverse events after vaccination?",
    "answer": "VAERS",
    "pool": [
      "VAERS",
      "MedWatch only",
      "DEA Form 106",
      "Orange Book"
    ],
    "detail": "VAERS is the Vaccine Adverse Event Reporting System used for reports following vaccination."
  },
  {
    "question": "What is a near miss?",
    "answer": "An error caught before reaching the patient",
    "pool": [
      "An error that reaches the patient",
      "An error caught before reaching the patient",
      "A medication recall",
      "A rejected insurance claim"
    ],
    "detail": "A near miss is an error detected and corrected before it reaches the patient."
  },
  {
    "question": "What is the main goal of root-cause analysis after a medication error?",
    "answer": "Identify underlying system causes",
    "pool": [
      "Assign blame",
      "Identify underlying system causes",
      "Increase prescription volume",
      "Determine insurance coverage"
    ],
    "detail": "Root-cause analysis looks for underlying process or system factors so similar errors can be prevented."
  },
  {
    "question": "Continuous quality improvement (CQI) is best described as:",
    "answer": "Ongoing review and improvement of processes",
    "pool": [
      "A one-time inspection",
      "Ongoing review and improvement of processes",
      "A controlled-substance inventory",
      "A patient billing method"
    ],
    "detail": "CQI repeatedly examines workflow and errors to improve safety and performance over time."
  },
  {
    "question": "What should be done with a counting tray after counting a medication that could contaminate the next prescription?",
    "answer": "Clean it according to pharmacy procedure",
    "pool": [
      "Use it again immediately",
      "Clean it according to pharmacy procedure",
      "Place it in the refrigerator",
      "Cover it with paper"
    ],
    "detail": "Cleaning equipment between appropriate uses helps prevent cross-contamination and supports infection prevention."
  },
  {
    "question": "Which situation most clearly requires pharmacist intervention?",
    "answer": "A patient asks which OTC product is best for symptoms",
    "pool": [
      "Printing a receipt",
      "Selecting a vial size",
      "A patient asks which OTC product is best for symptoms",
      "Counting 30 tablets"
    ],
    "detail": "Recommending an OTC medication requires professional clinical judgment and should be handled by the pharmacist."
  },
  {
    "question": "Barcode verification is primarily intended to help prevent:",
    "answer": "Wrong-product selection errors",
    "pool": [
      "Wrong-product selection errors",
      "Insurance deductibles",
      "Medication shortages",
      "DEA registration expiration"
    ],
    "detail": "Barcode systems compare product identifiers and can help catch wrong-drug or wrong-product selection before dispensing."
  },
  {
    "question": "Separating two medications with similar names on the shelf is an example of:",
    "answer": "Error prevention",
    "pool": [
      "Inventory valuation",
      "Error prevention",
      "Reverse distribution",
      "Therapeutic substitution"
    ],
    "detail": "Physical separation is an error-prevention strategy that reduces accidental selection of look-alike/sound-alike products."
  }
];
