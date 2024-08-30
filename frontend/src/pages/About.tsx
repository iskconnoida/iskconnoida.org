import { domAnimation, LazyMotion, m } from "framer-motion";
import Writeup from "../components/Writeup";

/**
 *
 *
 * @return {JSX.Element} About page
 */
export default function About(): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full w-full mt-10 md:mt-6 pt-12 md:pt-16"
      >
        <div id="about">
          <Writeup title="About ISKCON Noida">
            <img
              src="/images/temple.webp"
              className="rounded-lg shadow-lg mb-6"
              loading="lazy"
            />
            <p>
              Welcome to ISKCON Noida Temple, a spiritual oasis nestled at A-5
              Maharaja Agrasen Marg, Noida Sector 33, 201301, UP. Our temple is
              a beacon of devotion and knowledge, inviting visitors to embark on
              a journey of self-discovery and spiritual growth.
            </p>

            <p>
              Enrich your spiritual journey at Govind Dham and Bhaktivedanta
              Academy, where seekers can enroll in certified and authorized
              Bhaktivedanta courses, delving deep into the timeless wisdom of
              the Vedas and Bhagavad Gita.
            </p>

            <p>
              Within our sacred walls, you will find the divine presence of Sri
              Sri Radha Govind Dev, Sri Sri Jagannath Baldev Subhadra, and Sri
              Sri Gaura Nitai, whose benevolent gaze fills the hearts of
              devotees with love and devotion.
            </p>

            <p>
              Join us in our daily rituals, as the temple opens its doors from
              4:30 am to 1 pm, and then again from 4:30 pm to 8:30 pm. Witness
              the enchanting spectacle of deity adornments, changed daily, and
              partake in the six aartis performed with utmost reverence and
              devotion.
            </p>

            <p>
              Experience the warmth of our temple facilities, including the
              "Back to Godhead" Guest House, offering a serene retreat for
              pilgrims and seekers alike. Explore the Krishna Expo, where
              intricate 3D models unravel the profound science of Vedic
              literatures, guiding visitors on a journey of enlightenment.
            </p>

            <p>
              Celebrate life's special moments in our elegant function halls,
              where the divine ambiance lends a sacred touch to weddings,
              ceremonies, and gatherings. And savor the divine flavors of pure
              vegetarian cuisine at Govindas Restaurant, where every bite is a
              feast for the senses and nourishment for the soul.
            </p>

            <p>
              Come, immerse yourself in the divine embrace of ISKCON Noida
              Temple, where spirituality meets serenity, and every moment is a
              step closer to the divine.
            </p>
          </Writeup>
        </div>
        <div id="prabhupada">
          <Writeup title="About Prabhupada">
            <img
              src="/images/prabhupada-1.webp"
              className="rounded-lg shadow-lg mb-6"
              loading="lazy"
            />
            <p>
              Srila Prabhupada, also known as His Divine Grace A.C.
              Bhaktivedanta Swami Prabhupada, is the founder-acharya of the
              International Society for Krishna Consciousness (ISKCON), commonly
              known as the Hare Krishna movement. He was born Abhay Charan De on
              September 1, 1896, in Calcutta, India, into a devout Vaishnava
              family.
            </p>

            <p>
              From a young age, Abhay Charan De showed a keen interest in
              spirituality and devotion to Lord Krishna. In 1922, he met his
              spiritual master, Srila Bhaktisiddhanta Sarasvati Thakura, who
              urged him to spread the teachings of Lord Chaitanya Mahaprabhu and
              the practice of Krishna consciousness in the English-speaking
              world.
            </p>

            <p>
              After receiving the blessings and instruction from his guru, Abhay
              Charan De dedicated his life to fulfilling this mission. In 1965,
              at the age of 69, he embarked on a historic journey to the United
              States, carrying with him only his faith, determination, and a
              trunk of Srimad-Bhagavatam translations.
            </p>

            <p>
              Facing numerous challenges and obstacles, Srila Prabhupada
              tirelessly preached the message of Krishna consciousness,
              conducting public lectures, distributing books, and establishing
              temples and centers around the world. His teachings emphasized the
              chanting of the Hare Krishna mantra as the most effective means of
              spiritual realization in this age.
            </p>

            <p>
              Under his guidance, ISKCON grew rapidly, attracting thousands of
              followers from diverse backgrounds. Srila Prabhupada's
              translations and commentaries on ancient Vedic texts, such as the
              Bhagavad Gita and the Srimad-Bhagavatam, became widely acclaimed
              for their clarity and depth.
            </p>

            <p>
              Throughout his life, Srila Prabhupada demonstrated unwavering
              devotion to Lord Krishna and compassion for all living beings. He
              left behind a legacy of spiritual wisdom, devotion, and service
              that continues to inspire millions of people worldwide.
            </p>

            <p>
              Srila Prabhupada passed away on November 14, 1977, in Vrindavan,
              India, but his teachings and the movement he founded continue to
              flourish, spreading the message of love, peace, and spiritual
              fulfillment to seekers across the globe. He remains revered as a
              saint, scholar, and spiritual pioneer whose life exemplified the
              highest ideals of devotion and service to God.
            </p>
          </Writeup>
        </div>
        <div id="mission">
          <Writeup title="Our Mission">
            <p>
              The International Society for Krishna Consciousness (ISKCON),
              founded by Srila Prabhupada, has various missions that guide its
              activities and serve as the foundation for its global outreach.
              While the specifics may vary slightly depending on interpretation,
              here's a commonly referenced set of missions within ISKCON:
            </p>

            <ul className="list-disc pl-6 pt-4">
              <li>
                <span className="font-bold">
                  To systematically propagate spiritual knowledge to society at
                  large and to educate all people in the techniques of spiritual
                  life:
                </span>{" "}
                ISKCON's primary mission is to spread the teachings of Lord
                Krishna and the principles of Bhakti Yoga to people of all
                backgrounds and walks of life. This involves conducting outreach
                programs, distributing spiritual literature, and providing
                educational resources to help individuals on their spiritual
                journey.
              </li>
              <li>
                <span className="font-bold">
                  To propagate a consciousness of Krishna (God), as it is
                  revealed in the great scriptures of India, Bhagavad-gita and
                  Srimad-Bhagavatam:
                </span>{" "}
                Central to ISKCON's mission is the promotion of Krishna
                consciousness, which involves cultivating awareness and devotion
                to Lord Krishna as the Supreme Personality of Godhead. This is
                done through the study and dissemination of sacred texts such as
                the Bhagavad Gita and the Srimad-Bhagavatam, which outline the
                philosophy and practices of Bhakti Yoga.
              </li>
              <li>
                <span className="font-bold">
                  To bring the members of the Society together with each other
                  and nearer to Krishna, the prime entity, thus developing the
                  idea within the members, and humanity at large, that each soul
                  is part and parcel of the quality of Godhead (Krishna):
                </span>{" "}
                ISKCON aims to foster a sense of community among its members and
                provide them with opportunities for spiritual growth and
                development. Through congregational chanting, devotional
                gatherings, and service activities, members are encouraged to
                deepen their relationship with Lord Krishna and recognize the
                spiritual unity of all beings.
              </li>
              <li>
                <span className="font-bold">
                  To teach and encourage the Sankirtana movement, congregational
                  chanting of the holy name of God, as revealed in the teachings
                  of Lord Sri Caitanya Mahaprabhu:
                </span>{" "}
                ISKCON places a strong emphasis on the Sankirtana movement,
                which involves the congregational chanting of the Hare Krishna
                mantra as a means of spiritual upliftment and enlightenment.
                Through chanting, devotees aim to purify their hearts, cultivate
                love for God, and spread peace and harmony throughout society.
              </li>
              <li>
                <span className="font-bold">
                  To erect for the members, and for society at large, a holy
                  place of transcendental pastimes dedicated to the personality
                  of Krishna:
                </span>{" "}
                ISKCON seeks to establish temples and spiritual centers
                dedicated to Lord Krishna where devotees can come together to
                worship, study, and engage in devotional activities. These
                temples serve as sacred spaces for spiritual growth and
                enlightenment, as well as centers for outreach and community
                service.
              </li>
              <li>
                <span className="font-bold">
                  To bring the members closer together for the purpose of
                  teaching a simpler, more natural way of life:
                </span>{" "}
                ISKCON advocates for a simpler, more natural way of life that is
                aligned with spiritual values and principles. Through simple
                living, high thinking, and a focus on sustainable practices,
                members seek to reduce materialistic distractions and cultivate
                a deeper connection with God and nature.
              </li>
              <li>
                <span className="font-bold">
                  With a view towards achieving the aforementioned purposes, to
                  publish and distribute periodicals, magazines, books and other
                  writings:
                </span>{" "}
                ISKCON publishes and distributes a wide range of spiritual
                literature, including books, magazines, and periodicals, to
                disseminate the teachings of Lord Krishna and promote spiritual
                knowledge and understanding.
              </li>
            </ul>
          </Writeup>
        </div>
      </m.div>
    </LazyMotion>
  );
}
