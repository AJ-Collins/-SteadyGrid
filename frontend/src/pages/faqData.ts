export type FaqItem = {
  question: string;
  answer: React.ReactNode | string;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export const faqData: FaqCategory[] = [
  {
    title: "Shipping",
    items: [
      {
        question: "Shipping Times",
        answer: "SteadyGrid processes orders on a first-come, first-served basis. After payment is processed and your order is packaged, you will receive an email with tracking information for your shipment. For in-stock products, standard processing times are 1 - 3 business days. Estimated delivery times are 3 - 15 business days depending on the carrier."
      },
      {
        question: "Parcel Shipping",
        answer: "Estimated shipping times on single item, in-stock orders are 2 - 4 business days. Parcel shipping services offered include FedEx, UPS, and USPS. SteadyGrid offers parcel shipping options to qualifying products. Shipments cannot be rerouted once shipped."
      },
      {
        question: "Cancellation Policy",
        answer: "Cancellations and order changes are permitted to open, unshipped orders. Cancellations must be initiated with our Customer Support team during normal business hours. If items have been packaged but not yet shipped, a cancellation or order change may be permitted with a restocking fee of up to 15%. Once assigned a tracking number, no changes can be made."
      },
      {
        question: "Solar Panels",
        answer: "We have discontinued palletizing shipments of less than 10 solar panels to ensure safe delivery. When purchasing solar panels, we urge customers to purchase additional panels in case of transit damages. Delivery is Curbside Delivery. Any undiscovered or concealed damages not noted on the delivery receipt must be reported within 24 hours."
      },
      {
        question: "LTL Freight",
        answer: "All Freight delivery dates are estimates (standard transit is 3-15 business days). Freight delivery is Curbside Delivery. You are responsible to remove the goods from where they were placed by the carrier."
      },
      {
        question: "Damages & Claims",
        answer: "You must inspect the order upon delivery for any damages or shortages. Undiscovered or concealed damages not noted on the delivery receipt must be reported within 24 hours. Take photos of all 4 sides of the pallet and note any tears or scuffing on the delivery receipt before signing."
      },
      {
        question: "International Shipping",
        answer: "SteadyGrid can accommodate most international parcel shipping of non-hazmat materials less than 50lbs via UPS, FedEx, and USPS. For freight, we offer custom quotes or can ship to a freight forwarder within the United States. International shipments may experience customs delays."
      },
      {
        question: "Terminal Pickup",
        answer: "Terminal Pickup may be offered for certain orders. Product responsibility and liability are transferred to the customer upon pickup. Ensure your vehicle can handle the pickup—standard bed trucks are under 78” long, while most pallets are 72”-84” long. We will not load pallets into cars, sedans, RVs, or toy haulers."
      }
    ]
  },
  {
    title: "Ordering",
    items: [
      {
        question: "Order Processing",
        answer: "SteadyGrid confirms and allocates inventory on paid orders. All orders are processed on a first-come, first-served basis. Once payment is confirmed, your order will be processed between 2 and 5 business days."
      },
      {
        question: "Back-Orders / Pre-Orders",
        answer: "Any items that are unavailable will be placed on back order, and the remainder of your order may be split shipped. Estimated ship dates for backordered items are estimates and may change due to delays and demand."
      },
      {
        question: "Payments",
        answer: "SteadyGrid accepts payments via Credit Card, PayPal, Affirm, and Wire Transfer/ACH upon request. On-site payment options for terminal pickup are available by Cash; otherwise, payment must be made prior to pickup."
      },
      {
        question: "Sales Tax & Duties",
        answer: "All orders are subject to applicable sales tax. If your order ships outside the United States, your country's customs authority may charge customs clearance fees, import duties, taxes, or other costs which are your responsibility."
      }
    ]
  },
  {
    title: "Financing",
    items: [
      {
        question: "Financing Options",
        answer: "We offer Affirm, a Buy Now Pay Later financing solution at checkout. We also offer PayPal Pay Later. Choose PayPal at checkout to pay later with Pay Monthly and get a decision in seconds."
      }
    ]
  },
  {
    title: "Returns & Support",
    items: [
      {
        question: "Return Conditions",
        answer: "Returns are accepted on a case-by-case basis. Return must be within 90 days of the delivery date. New and unused products are subject to up to a 15% restocking fee. Used or installed products are subject to a 20% restocking fee if returned in working condition."
      },
      {
        question: "RMA Process",
        answer: "To begin an RMA, contact our Tech Support team to troubleshoot remotely. If a resolution is not achieved, an RMA will be accepted for return to SteadyGrid. Items sent back without an RMA acceptance status will not be accepted."
      },
      {
        question: "Warranty",
        answer: "Equipment is designed to be installed ONLY by licensed, trained, and insured solar electrical installation professionals. Warranty claims may be denied for damages incurred during installation, mishandling, tampering, acts of God, or using the product outside of its intended applications."
      },
      {
        question: "Refused Shipments",
        answer: "If you receive damaged goods, it is best to take possession and file a claim rather than refusing the shipment. Refused shipments are subject to a restocking fee of up to 20%, and shipping costs are non-refundable."
      },
      {
        question: "Technical Support",
        answer: "We offer in-house Technical Support. Please email us with a detailed synopsis of the issue, images of the problem, and specifics to your PV system (including wide shots, main panel, inverter connections, and voltmeter readings)."
      },
      {
        question: "Terms and Conditions",
        answer: "By visiting our site or purchasing from us, you agree to our Terms of Service. We reserve the right to refuse service to anyone for any reason at any time. Prices for our products are subject to change without notice."
      }
    ]
  }
];
