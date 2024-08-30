import { m } from "framer-motion";
import { Link } from "react-router-dom";

/**
 *
 *
 * @return {JSX.Element} Refunds and Returns page
 */
export default function RefundReturns(): JSX.Element {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full px-8 lg:px-12 mt-10"
    >
      <div className="flex flex-col gap-5 my-16">
        <h2 className="text-3xl font-bold">Overview</h2>
        <p>
          Our refund and returns policy lasts 30 days. If 30 days have passed
          since your purchase, we can’t offer you a full refund or exchange.
        </p>
        <p>
          To be eligible for a return, your item must be unused and in the same
          condition that you received it. It must also be in the original
          packaging.
        </p>
        <p>
          Several types of goods are exempt from being returned. Perishable
          goods such as food, flowers, newspapers or magazines cannot be
          returned. We also do not accept products that are intimate or sanitary
          goods, hazardous materials, or flammable liquids or gases.
        </p>
        <p>Additional non-returnable items:</p>
        <ul className="list-disc ml-6">
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Some health and personal care items</li>
        </ul>
        <p>
          To complete your return, we require a receipt or proof of purchase.
        </p>
        <p>Please do not send your purchase back to the manufacturer.</p>
        <p>
          There are certain situations where only partial refunds are granted:
        </p>
        <ul className="list-disc ml-6">
          <li>Book with obvious signs of use</li>
          <li>
            CD, DVD, VHS tape, software, video game, cassette tape, or vinyl
            record that has been opened.
          </li>
          <li>
            Any item not in its original condition, is damaged or missing parts
            for reasons not due to our error.
          </li>
          <li>Any item that is returned more than 30 days after delivery</li>
        </ul>

        <h2 className="text-3xl font-bold">Refunds</h2>
        <p>
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund.
        </p>
        <p>
          If you are approved, then your refund will be processed, and a credit
          will automatically be applied to your credit card or original method
          of payment, within a certain amount of days.
        </p>

        <h3 className="text-xl font-semibold">Late or missing refunds</h3>
        <p>
          If you haven’t received a refund yet, first check your bank account
          again.
        </p>
        <p>
          Then contact your credit card company, it may take some time before
          your refund is officially posted.
        </p>
        <p>
          Next contact your bank. There is often some processing time before a
          refund is posted.
        </p>
        <p>
          Link If you’ve done all of this and you still have not received your
          refund yet, please contact us at{" "}
          <Link to="mailto:connect@iskconnoida.org" className="text-blue-600">
            connect@iskconnoida.org
          </Link>
          .
        </p>

        <h3 className="text-xl font-semibold">Sale items</h3>
        <p>
          Only regular priced items may be refunded. Sale items cannot be
          refunded.
        </p>

        <h2 className="text-3xl font-bold">Exchanges</h2>
        <p>
          We only replace items if they are defective or damaged. If you need to
          exchange it for the same item, send us an email at{" "}
          <Link to="mailto:connect@iskconnoida.org" className="text-blue-600">
            connect@iskconnoida.org
          </Link>{" "}
          and send your item to:{" "}
          <Link
            to="https://www.google.com/maps/place/ISKCON+Temple+Noida,+A-5,+Maharaja+Agrasen+Marg,+Opposite+Opposite+NTPC+office,+Block+A,+Sector+33,+Noida,+Uttar+Pradesh+201301/@28.5871507,77.350492,16z/data=!4m6!3m5!1s0x390ce5a12fee7d95:0x8bb417c53d8d172b!8m2!3d28.5868422!4d77.3503375!16s%2Fg%2F1wt3lsgf"
            target="_blank"
            rel="noopener norefferer"
            className="text-blue-600"
          >
            ISKCON Noida, A-5, Maharaja Agrasen Marg, Opposite NTPC office,
            Block A, Sector 33, Noida, 201301
          </Link>
          .
        </p>

        <h2 className="text-3xl font-bold">Gifts</h2>
        <p>
          If the item was marked as a gift when purchased and shipped directly
          to you, you’ll receive a gift credit for the value of your return.
          Once the returned item is received, a gift certificate will be mailed
          to you.
        </p>
        <p>
          If the item wasn’t marked as a gift when purchased, or the gift giver
          had the order shipped to themselves to give to you later, we will send
          a refund to the gift giver and they will find out about your return.
        </p>

        <h2 className="text-3xl font-bold">Shipping returns</h2>
        <p>
          To return your product, you should mail your product to:{" "}
          <Link
            to="https://www.google.com/maps/place/ISKCON+Temple+Noida,+A-5,+Maharaja+Agrasen+Marg,+Opposite+Opposite+NTPC+office,+Block+A,+Sector+33,+Noida,+Uttar+Pradesh+201301/@28.5871507,77.350492,16z/data=!4m6!3m5!1s0x390ce5a12fee7d95:0x8bb417c53d8d172b!8m2!3d28.5868422!4d77.3503375!16s%2Fg%2F1wt3lsgf"
            target="_blank"
            rel="noopener norefferer"
            className="text-blue-600"
          >
            ISKCON Noida, A-5, Maharaja Agrasen Marg, Opposite NTPC office,
            Block A, Sector 33, Noida, 201301
          </Link>
          .
        </p>
        <p>
          You will be responsible for paying for your own shipping costs for
          returning your item. Shipping costs are non-refundable. If you receive
          a refund, the cost of return shipping will be deducted from your
          refund.
        </p>
        <p>
          Depending on where you live, the time it may take for your exchanged
          product to reach you may vary.
        </p>
        <p>
          If you are returning more expensive items, you may consider using a
          trackable shipping service or purchasing shipping insurance. We don’t
          guarantee that we will receive your returned item.
        </p>

        <h2 className="text-3xl font-bold">Need help?</h2>
        <p>
          Contact us at{" "}
          <Link to="mailto:connect@iskconnoida.org" className="text-blue-600">
            connect@iskconnoida.org
          </Link>{" "}
          for questions related to refunds and returns.
        </p>
      </div>
    </m.section>
  );
}
