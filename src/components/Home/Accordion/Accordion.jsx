import Title from "../../Title/Title";

const Accordion = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <Title name={`Frequently Asked Questions`} />

          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What types of properties are available in the project?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                We offer a diverse range of properties, including spacious
                apartments, luxurious villas, and versatile commercial spaces.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What are the key amenities provided in the project?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Our project boasts state-of-the-art amenities, including secure
                parking, 24/7 security, landscaped gardens, and recreational
                areas for residents.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What is the pricing structure?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Our pricing is competitive and transparent. For detailed
                information, please refer to our brochure or get in touch with
                our sales team.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What are the financing options available?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                We collaborate with leading financial institutions to provide
                attractive financing options and mortgage solutions tailored to
                our buyers' needs.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                What legal formalities are involved in the purchase process?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                The purchase process involves standard legal procedures,
                including document verification and compliance with all
                regulatory requirements.{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accordion;
