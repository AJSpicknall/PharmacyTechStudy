/* 201 medications used by the Medication Mastery quiz. */
const masteryMedications = [
  {
    "generic": "Omeprazole",
    "brands": [
      "Prilosec"
    ],
    "indication": "Acid Reflux, Cough, or Nausea"
  },
  {
    "generic": "Pantoprazole Sodium",
    "brands": [
      "Protonix"
    ],
    "indication": "Acid Reflux, Cough, or Nausea"
  },
  {
    "generic": "Famotidine",
    "brands": [
      "Pepcid"
    ],
    "indication": "Acid Reflux, Cough, or Nausea"
  },
  {
    "generic": "Esomeprazole",
    "brands": [
      "Nexium"
    ],
    "indication": "Acid Reflux, Cough, or Nausea"
  },
  {
    "generic": "Lansoprazole",
    "brands": [
      "Prevacid"
    ],
    "indication": "Acid Reflux, Cough, or Nausea"
  },
  {
    "generic": "Ondansetron",
    "brands": [
      "Zofran"
    ],
    "indication": "Acid Reflux, Cough, or Nausea"
  },
  {
    "generic": "Promethazine",
    "brands": [
      "Phenergan"
    ],
    "indication": "Acid Reflux, Cough, or Nausea"
  },
  {
    "generic": "Benzonatate",
    "brands": [
      "Tessalon Perles"
    ],
    "indication": "Acid Reflux, Cough, or Nausea"
  },
  {
    "generic": "Buspirone",
    "brands": [
      "Buspar"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Mixed Amphetamine Salts",
    "brands": [
      "Adderall"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Methylphenidate",
    "brands": [
      "Ritalin",
      "Concerta"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Lisdexamfetamine",
    "brands": [
      "Vyvanse"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Lorazepam",
    "brands": [
      "Ativan"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Alprazolam",
    "brands": [
      "Xanax"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Clonazepam",
    "brands": [
      "Klonopin"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Temazepam",
    "brands": [
      "Restoril"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Diazepam",
    "brands": [
      "Valium"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Dexmethylphenidate",
    "brands": [
      "Focalin"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Guanfacine",
    "brands": [
      "Tenex"
    ],
    "indication": "ADHD, Anxiety, & Sedative"
  },
  {
    "generic": "Mometasone",
    "brands": [
      "Nasonex"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Methylprednisolone",
    "brands": [
      "Medrol"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Meclizine",
    "brands": [
      "Antivert"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Loratadine",
    "brands": [
      "Claritin"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Levocetirizine",
    "brands": [
      "Xyzal"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Hydroxyzine",
    "brands": [
      "Atarax",
      "Vistaril"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Hydrocortisone",
    "brands": [
      "Cortizone"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Cetirizine",
    "brands": [
      "Zyrtec"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Prednisolone",
    "brands": [
      "OraPred"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Triamcinolone",
    "brands": [
      "Kenalog"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Fluticasone",
    "brands": [
      "Flonase"
    ],
    "indication": "Allergies & Anti-Inflammatories"
  },
  {
    "generic": "Memantine",
    "brands": [
      "Namenda"
    ],
    "indication": "Alzheimer's or Parkinson's"
  },
  {
    "generic": "Donepezil",
    "brands": [
      "Aricept"
    ],
    "indication": "Alzheimer's or Parkinson's"
  },
  {
    "generic": "Carbidopa / Levodopa",
    "brands": [
      "Sinemet"
    ],
    "indication": "Alzheimer's or Parkinson's"
  },
  {
    "generic": "Pramipexole",
    "brands": [
      "Mirapex"
    ],
    "indication": "Alzheimer's or Parkinson's"
  },
  {
    "generic": "Ropinirole",
    "brands": [
      "Requip"
    ],
    "indication": "Alzheimer's or Parkinson's"
  },
  {
    "generic": "Carvedilol",
    "brands": [
      "Coreg"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Chlorthalidone",
    "brands": [
      "Hygroton"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Losartan / Hydrochlorothiazide",
    "brands": [
      "Hyzaar"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Losartan Potassium",
    "brands": [
      "Cozaar"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Nifedipine",
    "brands": [
      "Procardia"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Clonidine",
    "brands": [
      "Catapres"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Amlodipine",
    "brands": [
      "Norvasc"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Amlodipine / Benazepril",
    "brands": [
      "Lotrel"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Atenolol",
    "brands": [
      "Tenormin"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Hydrochlorothiazide",
    "brands": [
      "Microzide"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Metoprolol Succinate ER",
    "brands": [
      "Toprol XL"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Metoprolol Tartrate",
    "brands": [
      "Lopressor"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Lisinopril",
    "brands": [
      "Prinivil"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Lisinopril / HCTZ",
    "brands": [
      "Zestoretic"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Nebivolol",
    "brands": [
      "Bystolic"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Propranolol",
    "brands": [
      "Inderal"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Ramipril",
    "brands": [
      "Altace"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Spironolactone",
    "brands": [
      "Aldactone"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Triamterene / HCTZ",
    "brands": [
      "Dyazide",
      "Maxzide"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Verapamil",
    "brands": [
      "Verelan"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Valsartan",
    "brands": [
      "Diovan"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Valsartan / HCTZ",
    "brands": [
      "Diovan HCT"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Furosemide",
    "brands": [
      "Lasix"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Diltiazem",
    "brands": [
      "Cardizem"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Enalapril",
    "brands": [
      "Vasotec"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Benazepril",
    "brands": [
      "Lotensin"
    ],
    "indication": "Antihypertensive"
  },
  {
    "generic": "Montelukast",
    "brands": [
      "Singulair"
    ],
    "indication": "Asthma"
  },
  {
    "generic": "Albuterol / Ipratropium",
    "brands": [
      "Combivent"
    ],
    "indication": "Asthma"
  },
  {
    "generic": "Albuterol",
    "brands": [
      "ProAir HFA",
      "Ventolin HFA"
    ],
    "indication": "Asthma"
  },
  {
    "generic": "Tiotropium",
    "brands": [
      "Spiriva"
    ],
    "indication": "Asthma"
  },
  {
    "generic": "Fluticasone / Salmeterol",
    "brands": [
      "Advair Diskus"
    ],
    "indication": "Asthma"
  },
  {
    "generic": "Dupilumab",
    "brands": [
      "Dupixent"
    ],
    "indication": "Asthma"
  },
  {
    "generic": "Budesonide / Formoterol",
    "brands": [
      "Symbicort"
    ],
    "indication": "Asthma"
  },
  {
    "generic": "Budesonide",
    "brands": [
      "Pulmicort"
    ],
    "indication": "Asthma"
  },
  {
    "generic": "Mirabegron",
    "brands": [
      "Myrbetriq"
    ],
    "indication": "Bladder, Enlarged Prostate, or UTIs"
  },
  {
    "generic": "Oxybutynin",
    "brands": [
      "Ditropan"
    ],
    "indication": "Bladder, Enlarged Prostate, or UTIs"
  },
  {
    "generic": "Doxazosin",
    "brands": [
      "Cardura"
    ],
    "indication": "Bladder, Enlarged Prostate, or UTIs"
  },
  {
    "generic": "Terazosin",
    "brands": [
      "Hytrin"
    ],
    "indication": "Bladder, Enlarged Prostate, or UTIs"
  },
  {
    "generic": "Tamsulosin",
    "brands": [
      "Flomax"
    ],
    "indication": "Bladder, Enlarged Prostate, or UTIs"
  },
  {
    "generic": "Finasteride",
    "brands": [
      "Proscar"
    ],
    "indication": "Bladder, Enlarged Prostate, or UTIs"
  },
  {
    "generic": "Nitrofurantoin",
    "brands": [
      "Macrobid"
    ],
    "indication": "Bladder, Enlarged Prostate, or UTIs"
  },
  {
    "generic": "Apixaban",
    "brands": [
      "Eliquis"
    ],
    "indication": "Blood Thinner or Clot Prevention"
  },
  {
    "generic": "Rivaroxaban",
    "brands": [
      "Xarelto"
    ],
    "indication": "Blood Thinner or Clot Prevention"
  },
  {
    "generic": "Warfarin",
    "brands": [
      "Coumadin"
    ],
    "indication": "Blood Thinner or Clot Prevention"
  },
  {
    "generic": "Clopidogrel",
    "brands": [
      "Plavix"
    ],
    "indication": "Blood Thinner or Clot Prevention"
  },
  {
    "generic": "Lovastatin",
    "brands": [
      "Mevacor"
    ],
    "indication": "Cholesterol Lowering"
  },
  {
    "generic": "Atorvastatin",
    "brands": [
      "Lipitor"
    ],
    "indication": "Cholesterol Lowering"
  },
  {
    "generic": "Omega-3-Acid Ethyl Esters",
    "brands": [
      "Lovaza"
    ],
    "indication": "Cholesterol Lowering"
  },
  {
    "generic": "Rosuvastatin",
    "brands": [
      "Crestor"
    ],
    "indication": "Cholesterol Lowering"
  },
  {
    "generic": "Simvastatin",
    "brands": [
      "Zocor"
    ],
    "indication": "Cholesterol Lowering"
  },
  {
    "generic": "Gemfibrozil",
    "brands": [
      "Lopid"
    ],
    "indication": "Cholesterol Lowering"
  },
  {
    "generic": "Fenofibrate",
    "brands": [
      "Tricor"
    ],
    "indication": "Cholesterol Lowering"
  },
  {
    "generic": "Ezetimibe",
    "brands": [
      "Zetia"
    ],
    "indication": "Cholesterol Lowering"
  },
  {
    "generic": "Bupropion",
    "brands": [
      "Wellbutrin"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Escitalopram",
    "brands": [
      "Lexapro"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Duloxetine",
    "brands": [
      "Cymbalta"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Fluoxetine",
    "brands": [
      "Prozac"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Venlafaxine",
    "brands": [
      "Effexor"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Trazodone",
    "brands": [
      "Desyrel"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Sertraline",
    "brands": [
      "Zoloft"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Paroxetine",
    "brands": [
      "Paxil"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Nortriptyline",
    "brands": [
      "Pamelor"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Citalopram",
    "brands": [
      "Celexa"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Mirtazapine",
    "brands": [
      "Remeron"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Amitriptyline",
    "brands": [
      "Elavil"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Zolpidem Tartrate",
    "brands": [
      "Ambien"
    ],
    "indication": "Depression, Antidepressants, & Sleep"
  },
  {
    "generic": "Metformin / Sitagliptin",
    "brands": [
      "Janumet"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Metformin",
    "brands": [
      "Glucophage"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Liraglutide",
    "brands": [
      "Victoza"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Linagliptin",
    "brands": [
      "Tradjenta"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Insulin Regular",
    "brands": [
      "Humulin R",
      "Novolin R"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Insulin Lispro",
    "brands": [
      "Humalog"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Insulin Glargine",
    "brands": [
      "Lantus"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Insulin Detemir",
    "brands": [
      "Levemir"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Insulin Aspart",
    "brands": [
      "Novolog"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Canagliflozin",
    "brands": [
      "Invokana"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Pioglitazone",
    "brands": [
      "Actos"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Sitagliptin",
    "brands": [
      "Januvia"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Semaglutide",
    "brands": [
      "Ozempic"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Glyburide",
    "brands": [
      "Diabeta"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Glipizide",
    "brands": [
      "Glucotrol"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Glimepiride",
    "brands": [
      "Amaryl"
    ],
    "indication": "Diabetes"
  },
  {
    "generic": "Latanoprost",
    "brands": [
      "Xalatan"
    ],
    "indication": "Glaucoma"
  },
  {
    "generic": "Brimonidine Tartrate",
    "brands": [
      "Alphagan"
    ],
    "indication": "Glaucoma"
  },
  {
    "generic": "Timolol",
    "brands": [
      "Timoptic"
    ],
    "indication": "Glaucoma"
  },
  {
    "generic": "Isosorbide Mononitrate",
    "brands": [
      "Imdur"
    ],
    "indication": "Heart Failure or Arrhythmias"
  },
  {
    "generic": "Nitroglycerin",
    "brands": [
      "Nitro-STAT"
    ],
    "indication": "Heart Failure or Arrhythmias"
  },
  {
    "generic": "Digoxin",
    "brands": [
      "Lanoxin"
    ],
    "indication": "Heart Failure or Arrhythmias"
  },
  {
    "generic": "Amiodarone",
    "brands": [
      "Cordarone"
    ],
    "indication": "Heart Failure or Arrhythmias"
  },
  {
    "generic": "Hydralazine",
    "brands": [
      "Apresoline"
    ],
    "indication": "Heart Failure or Arrhythmias"
  },
  {
    "generic": "Norgestrel",
    "brands": [
      "Opill"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Norethindrone",
    "brands": [
      "Camila",
      "Heather"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Ethinyl Estradiol / Norgestimate",
    "brands": [
      "Ortho Tri-Cyclen"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Ethinyl Estradiol / Norethindrone",
    "brands": [
      "Gildess",
      "Junel",
      "Coestrin",
      "Microgestin"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Ethinyl Estradiol / Levonorgestrel",
    "brands": [
      "Amethia",
      "Amethyst"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Ethinyl Estradiol / Etonogestrel",
    "brands": [
      "NuvaRing"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Ethinyl Estradiol / Drosperinone",
    "brands": [
      "Yaz",
      "Yazmin",
      "Gianvi",
      "Nikki"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Ethinyl Estradiol / Desogestrel",
    "brands": [
      "Apri",
      "Azurette"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Estradiol",
    "brands": [
      "Estrace"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Progesterone",
    "brands": [
      "Prometrium"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Testosterone",
    "brands": [
      "Andro Gel"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Levothyroxine",
    "brands": [
      "Synthroid",
      "Levoxyl"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Thyroid Extract",
    "brands": [
      "Armour Thyroid"
    ],
    "indication": "Pregnancy, Hormone Therapy, or Hypothyroidism"
  },
  {
    "generic": "Acyclovir",
    "brands": [
      "Zovirax"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Valacyclovir",
    "brands": [
      "Valtrex"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Fluconazole",
    "brands": [
      "Diflucan"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Metronidazole",
    "brands": [
      "Flagyl"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Levofloxacin",
    "brands": [
      "Levaquin"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Azithromycin",
    "brands": [
      "Zithromax"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Amoxicillin / Clavulanate Potassium",
    "brands": [
      "Augmentin"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Amoxicillin",
    "brands": [
      "Amoxil"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Ciprofloxacin",
    "brands": [
      "Cipro"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Clindamycin",
    "brands": [
      "Cleocin"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Cephalexin",
    "brands": [
      "Keflex"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Cefdinir",
    "brands": [
      "Omnicef"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Sulfamethoxazole / TMP",
    "brands": [
      "Bactrim"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Doxycycline",
    "brands": [
      "Doryx"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Mupirocin",
    "brands": [
      "Bactroban"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Bacitracin / Neomycin / Polymyxin B",
    "brands": [
      "Neosporin"
    ],
    "indication": "Bacterial, Viral, or Fungal Infections"
  },
  {
    "generic": "Lamotrigine",
    "brands": [
      "Lamictal"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Levetiracetam",
    "brands": [
      "Keppra"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Carbamazepine",
    "brands": [
      "Tegretol"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Pregabalin",
    "brands": [
      "Lyrica"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Topiramate",
    "brands": [
      "Topamax"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Acetaminophen / Butalbital",
    "brands": [
      "Bupap"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Sumatriptan",
    "brands": [
      "Imitrex"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Gabapentin",
    "brands": [
      "Neurontin"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Divalproex Sodium",
    "brands": [
      "Depakote"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Lithium",
    "brands": [
      "Lithobid"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Aripiprazole",
    "brands": [
      "Abilify"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Quetiapine Fumarate",
    "brands": [
      "Seroquel"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Risperidone",
    "brands": [
      "Risperdal"
    ],
    "indication": "Migraines, Mood Disorders, or Seizures"
  },
  {
    "generic": "Morphine",
    "brands": [
      "MS Contin"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Methocarbamol",
    "brands": [
      "Robaxin"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Menthol",
    "brands": [
      "Bengay",
      "Icy Hot"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Meloxicam",
    "brands": [
      "Mobic"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Hydrocodone Bitartrate",
    "brands": [
      "N/A"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Hydrocodone / APAP",
    "brands": [
      "Vicodin",
      "Norco",
      "Lortab"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Ibuprofen",
    "brands": [
      "Motrin"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Aspirin",
    "brands": [
      "N/A"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Acetaminophen",
    "brands": [
      "Tylenol"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Cyclobenzaprine",
    "brands": [
      "Flexeril"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Celecoxib",
    "brands": [
      "Celebrex"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Naproxen",
    "brands": [
      "Aleve"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Oxycodone",
    "brands": [
      "OxyContin"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Prednisone",
    "brands": [
      "Deltasone"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Tramadol",
    "brands": [
      "Ultram"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Diclofenac",
    "brands": [
      "Voltaren"
    ],
    "indication": "Pain or Inflammation"
  },
  {
    "generic": "Baclofen",
    "brands": [
      "Lioresal"
    ],
    "indication": "Rheumatoid Arthritis, Gout, Muscle Relaxant, or Osteoporosis"
  },
  {
    "generic": "Tizanidine",
    "brands": [
      "Zanaflex"
    ],
    "indication": "Rheumatoid Arthritis, Gout, Muscle Relaxant, or Osteoporosis"
  },
  {
    "generic": "Alendronate",
    "brands": [
      "Fosamax"
    ],
    "indication": "Rheumatoid Arthritis, Gout, Muscle Relaxant, or Osteoporosis"
  },
  {
    "generic": "Allopurinol",
    "brands": [
      "Zyloprim"
    ],
    "indication": "Rheumatoid Arthritis, Gout, Muscle Relaxant, or Osteoporosis"
  },
  {
    "generic": "Methotrexate",
    "brands": [
      "Rheumatrex"
    ],
    "indication": "Rheumatoid Arthritis, Gout, Muscle Relaxant, or Osteoporosis"
  },
  {
    "generic": "Hydroxychloroquine",
    "brands": [
      "Plaquenil"
    ],
    "indication": "Rheumatoid Arthritis, Gout, Muscle Relaxant, or Osteoporosis"
  },
  {
    "generic": "Polyethylene Glycol 3350",
    "brands": [
      "Miralax"
    ],
    "indication": "Stool, Bowels, or Crohn&#x27;s"
  },
  {
    "generic": "Docusate",
    "brands": [
      "Colace"
    ],
    "indication": "Stool, Bowels, or Crohn&#x27;s"
  },
  {
    "generic": "Dicyclomine",
    "brands": [
      "Bentyl"
    ],
    "indication": "Stool, Bowels, or Crohn&#x27;s"
  },
  {
    "generic": "Adalimumab",
    "brands": [
      "Humira"
    ],
    "indication": "Stool, Bowels, or Crohn&#x27;s"
  },
  {
    "generic": "Oseltamivir",
    "brands": [
      "Tamiflu"
    ],
    "indication": "Vaccines (Influenza or COVID)"
  },
  {
    "generic": "Nirmatrelvir or Ritonavir",
    "brands": [
      "Paxlovid"
    ],
    "indication": "Vaccines (Influenza or COVID)"
  },
  {
    "generic": "Magnesium",
    "brands": [
      "Uro-Mag"
    ],
    "indication": "Vitamins, Supplements, or Electrolytes"
  },
  {
    "generic": "Cyanocobalamin",
    "brands": [
      "Nascobal"
    ],
    "indication": "Vitamins, Supplements, or Electrolytes"
  },
  {
    "generic": "Folic Acid",
    "brands": [
      "Folate"
    ],
    "indication": "Vitamins, Supplements, or Electrolytes"
  },
  {
    "generic": "Potassium",
    "brands": [
      "Klor-Con"
    ],
    "indication": "Vitamins, Supplements, or Electrolytes"
  },
  {
    "generic": "Ferrous Sulfate",
    "brands": [
      "Feosol"
    ],
    "indication": "Vitamins, Supplements, or Electrolytes"
  },
  {
    "generic": "Ergocalciferol",
    "brands": [
      "Deltalin"
    ],
    "indication": "Vitamins, Supplements, or Electrolytes"
  }
];
