const practiceTitle = "Pharmacy Math";
const practiceStorageKey = "pharmacyTechPracticeBest:pharmacy-math";
const practiceQuestions = [
  {
    "question": "A prescription calls for 500 mg. Stock tablets contain 250 mg each. How many tablets are needed per dose?",
    "answer": "2 tablets",
    "pool": [
      "1 tablet",
      "2 tablets",
      "2.5 tablets",
      "4 tablets"
    ],
    "detail": "Use Desired \u00f7 Have: 500 mg \u00f7 250 mg/tablet = 2 tablets."
  },
  {
    "question": "A liquid contains 250 mg per 5 mL. How many mL provide a 375 mg dose?",
    "answer": "7.5 mL",
    "pool": [
      "5 mL",
      "6.5 mL",
      "7.5 mL",
      "10 mL"
    ],
    "detail": "Use D/H \u00d7 Q: (375 mg \u00f7 250 mg) \u00d7 5 mL = 7.5 mL."
  },
  {
    "question": "Convert 1.5 L to mL.",
    "answer": "1,500 mL",
    "pool": [
      "15 mL",
      "150 mL",
      "1,500 mL",
      "15,000 mL"
    ],
    "detail": "1 L = 1,000 mL, so 1.5 \u00d7 1,000 = 1,500 mL."
  },
  {
    "question": "A patient takes 1 tablet twice daily for 30 days. What quantity should be dispensed?",
    "answer": "60 tablets",
    "pool": [
      "30 tablets",
      "45 tablets",
      "60 tablets",
      "90 tablets"
    ],
    "detail": "2 tablets/day \u00d7 30 days = 60 tablets."
  },
  {
    "question": "A prescription is for 10 mL by mouth three times daily for 7 days. What total volume is needed?",
    "answer": "210 mL",
    "pool": [
      "70 mL",
      "140 mL",
      "210 mL",
      "300 mL"
    ],
    "detail": "10 mL/dose \u00d7 3 doses/day \u00d7 7 days = 210 mL."
  },
  {
    "question": "What is 0.25 g in milligrams?",
    "answer": "250 mg",
    "pool": [
      "25 mg",
      "250 mg",
      "2,500 mg",
      "0.025 mg"
    ],
    "detail": "1 g = 1,000 mg. 0.25 g \u00d7 1,000 = 250 mg."
  },
  {
    "question": "A 2% w/v solution contains how many grams of drug in 250 mL?",
    "answer": "5 g",
    "pool": [
      "2 g",
      "4 g",
      "5 g",
      "20 g"
    ],
    "detail": "2% w/v means 2 g per 100 mL. (2 g/100 mL) \u00d7 250 mL = 5 g."
  },
  {
    "question": "How many mL of a 20% stock solution are needed to prepare 100 mL of a 5% solution?",
    "answer": "25 mL",
    "pool": [
      "20 mL",
      "25 mL",
      "40 mL",
      "50 mL"
    ],
    "detail": "Use C1V1 = C2V2: 20% \u00d7 V1 = 5% \u00d7 100 mL. V1 = 500 \u00f7 20 = 25 mL."
  },
  {
    "question": "A medication is ordered at 5 mg/kg for a patient weighing 70 kg. What dose is required?",
    "answer": "350 mg",
    "pool": [
      "14 mg",
      "75 mg",
      "350 mg",
      "700 mg"
    ],
    "detail": "Dose = 5 mg/kg \u00d7 70 kg = 350 mg."
  },
  {
    "question": "A patient weighs 154 lb. Approximately how many kilograms is that?",
    "answer": "70 kg",
    "pool": [
      "55 kg",
      "60 kg",
      "70 kg",
      "84 kg"
    ],
    "detail": "Convert pounds to kilograms by dividing by 2.2: 154 \u00f7 2.2 = 70 kg."
  },
  {
    "question": "An IV bag contains 1,000 mL and must infuse over 8 hours. What is the pump rate?",
    "answer": "125 mL/hr",
    "pool": [
      "80 mL/hr",
      "100 mL/hr",
      "125 mL/hr",
      "160 mL/hr"
    ],
    "detail": "Rate = volume \u00f7 time: 1,000 mL \u00f7 8 hr = 125 mL/hr."
  },
  {
    "question": "An IV runs at 75 mL/hr for 6 hours. How much fluid is infused?",
    "answer": "450 mL",
    "pool": [
      "125 mL",
      "300 mL",
      "450 mL",
      "600 mL"
    ],
    "detail": "Volume = rate \u00d7 time: 75 mL/hr \u00d7 6 hr = 450 mL."
  },
  {
    "question": "A 30 mL bottle contains 15 mg/mL. How many total milligrams are in the bottle?",
    "answer": "450 mg",
    "pool": [
      "45 mg",
      "200 mg",
      "450 mg",
      "900 mg"
    ],
    "detail": "Total drug = concentration \u00d7 volume: 15 mg/mL \u00d7 30 mL = 450 mg."
  },
  {
    "question": "A pharmacy buys an item for $40 and sells it for $50. What is the dollar markup?",
    "answer": "$10",
    "pool": [
      "$5",
      "$10",
      "$20",
      "$40"
    ],
    "detail": "Dollar markup = selling price \u2212 acquisition cost: $50 \u2212 $40 = $10."
  },
  {
    "question": "A product normally costs $80 and is discounted 25%. What is the sale price?",
    "answer": "$60",
    "pool": [
      "$20",
      "$55",
      "$60",
      "$65"
    ],
    "detail": "25% of $80 = $20. Subtract the discount: $80 \u2212 $20 = $60."
  },
  {
    "question": "A prescription says 1 capsule q6h for 5 days. How many capsules are needed?",
    "answer": "20",
    "pool": [
      "10",
      "15",
      "20",
      "30"
    ],
    "detail": "q6h means every 6 hours, or 4 doses/day. 4 \u00d7 5 days = 20 capsules."
  },
  {
    "question": "A 1:1,000 epinephrine solution is equivalent to what concentration?",
    "answer": "1 mg/mL",
    "pool": [
      "0.1 mg/mL",
      "1 mg/mL",
      "10 mg/mL",
      "100 mg/mL"
    ],
    "detail": "1:1,000 means 1 g in 1,000 mL. 1 g = 1,000 mg, so 1,000 mg \u00f7 1,000 mL = 1 mg/mL."
  },
  {
    "question": "A prescription requires 45 g of a 10% cream. How many grams of active ingredient are present?",
    "answer": "4.5 g",
    "pool": [
      "0.45 g",
      "4.5 g",
      "10 g",
      "45 g"
    ],
    "detail": "10% of 45 g = 0.10 \u00d7 45 = 4.5 g of active ingredient."
  },
  {
    "question": "A 120 mL prescription is taken 5 mL twice daily. What is the days supply?",
    "answer": "12 days",
    "pool": [
      "6 days",
      "10 days",
      "12 days",
      "24 days"
    ],
    "detail": "Daily use = 5 mL \u00d7 2 = 10 mL/day. 120 mL \u00f7 10 mL/day = 12 days."
  },
  {
    "question": "A child weighs 44 lb. The dose is 10 mg/kg/day divided into 2 equal doses. How many mg are given per dose?",
    "answer": "100 mg",
    "pool": [
      "50 mg",
      "100 mg",
      "200 mg",
      "440 mg"
    ],
    "detail": "44 lb \u00f7 2.2 = 20 kg. Daily dose = 10 mg/kg \u00d7 20 kg = 200 mg/day. Divide by 2 doses = 100 mg per dose."
  }
];
