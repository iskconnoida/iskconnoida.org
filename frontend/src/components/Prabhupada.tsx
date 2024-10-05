/**
 *
 *
 * @return {JSX.Element} Prabhupada section
 */
export default function Prabhupada(): JSX.Element {
  return (
    <>
      <div className="bg-yellow-100">
        <img
          src="/images/vector.webp"
          className="h-96 w-96 -z-10 -mt-40 -mb-56 -ml-40"
          loading="lazy"
        />
        {screen.availWidth > 640 ? (
          <div className="w-full py-12 items-center flex justify-evenly">
            <div className="z-[3] h-full w-1/2 items-center text-center">
              FOUNDER ACHARYA
              <p className="text-4xl font-custom mb-4">
                His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada
              </p>
              <p>
                The dear most friend and ever well wisher of one and all who
                travelled the world to give the same trancendental bliss of
                Krishna Consciousness that he constantly relishes.
              </p>
            </div>
            <img
              src="/images/prabhupada.webp"
              alt="prabhupada"
              className="w-1/4 rounded-full border-4 border-white shadow-lg shadow-gray-500"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full py-12 items-center flex flex-col justify-center">
            <img
              src="/images/prabhupada.webp"
              alt="prabhupada"
              className="w-2/3 rounded-full m-4 border-4 z-[3] border-white shadow-lg shadow-gray-500"
              loading="lazy"
            />
            <div className="z-[3] h-full w-full py-2 px-8 text-center">
              FOUNDER ACHARYA
              <p className="text-4xl font-custom mb-4">
                {/* TODO: Implement custom font */}
                His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada
              </p>
              <p>
                The dear most friend and ever well wisher of one and all who
                travelled the world to give the same trancendental bliss of
                Kṛṣṇa Consciousness that he constantly relishes.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
