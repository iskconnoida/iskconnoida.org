import { domAnimation, LazyMotion, m } from "framer-motion";

/**
 *
 *
 * @interface ModalProps
 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 *
 *
 * @param {ModalProps} { isOpen, onClose }
 * @return {JSX.Element|null} temple schedule modal
 */
const TempleScheduleModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}: ModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="fixed inset-0 bg-black/50 pt-36 flex items-center justify-center z-50"
        onClick={handleOverlayClick}
      >
        <div className="bg-white w-full max-w-lg flex flex-col py-6 px-4 rounded-lg max-h-[80vh] overflow-y-auto">
          <button
            className="w-10 h-10 ml-auto -mb-10 sticky top-0 text-gray-600 hover:text-gray-800 rounded-full shadow-lg p-2 bg-primary100 hover:bg-primary200 border border-primary300 hover:border-primary400"
            onClick={onClose}
          >
            &#x2715; {/* This is the X (close) icon */}
          </button>
          <h2 className="text-2xl w-full font-bold text-primary600 mt-2 mb-4 px-10 md:px-0 text-shadow shadow-primary200">
            Temple timings | Open all days
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Closed from 01:00PM - 04:15PM and 09:00PM - 04:15AM (Next day)
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pb-8 md:pb-4 lg:pb-0">
            <div>
              <p className="font-bold text-lg">04:15AM - 05:00AM</p>
              <p>Mangala aarti</p>
              <p className="text-sm text-gray-600">First worship of the day</p>
            </div>
            <div>
              <p className="font-bold text-lg">05:00AM - 05:20AM</p>
              <p>Tulasi Puja</p>
              <p className="text-sm text-gray-600">Honoring Tulasi devi</p>
            </div>
            <div>
              <p className="font-bold text-lg">07:30AM - 07:40AM</p>
              <p>Sringar darshan</p>
              <p className="text-sm text-gray-600">
                Greeting the Deities in new outfit
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">07:40AM - 08:00AM</p>
              <p>Guru puja</p>
              <p className="text-sm text-gray-600">
                Honoring the Founder-acharya
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">08:00AM - 09:00AM</p>
              <p>Bhagavatam class</p>
              <p className="text-sm text-gray-600">
                Discourse from Vedic scripture
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">09:00AM - 12:00PM</p>
              <p>Darshan open</p>
              <p className="text-sm text-gray-600">Long lasting bliss</p>
            </div>
            <div>
              <p className="font-bold text-lg">12:30PM - 01:00PM</p>
              <p>Raj Bhoga aarti</p>
              <p className="text-sm text-gray-600">Noon worship</p>
            </div>
            <div>
              <p className="font-bold text-lg">04:30PM - 06:00PM</p>
              <p>Temple & Darshan Re-opens</p>
              <p className="text-sm text-gray-600">Post Noon worship</p>
            </div>
            <div>
              <p className="font-bold text-lg">06:15PM - 07:00PM</p>
              <p>Gaura Sandhya aarti & Tulasi aarti</p>
              <p className="text-sm text-gray-600">Evening worship ceremony</p>
            </div>
            <div>
              <p className="font-bold text-lg">07:00PM - 08:15PM</p>
              <p>Bhagavad Gita discourse</p>
              <p className="text-sm text-gray-600">
                Discourse from Vedic scripture
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">08:15PM - 08:30PM</p>
              <p>Shayana aarti</p>
              <p className="text-sm text-gray-600">
                Last worship ceremony of the day
              </p>
            </div>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default TempleScheduleModal;
