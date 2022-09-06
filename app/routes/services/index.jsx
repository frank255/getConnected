import Footer from "~/components/Footer";
import { Markup } from "interweave";
import { useLoaderData } from "@remix-run/react";
export const loader = async () => {
  const response = await fetch("http://localhost:1337/api/services");
  return response.json();
};
function index() {
  const services = useLoaderData();
  console.log(services);
  return (
    <>
      {/* services */}
      <section class="p-6 mb-20 md:mb-6 md:py-20 bg-white">
        <div class="container max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold tracking-tight text-center">
            Our Services
          </h2>
          <p class="mt-2 text-lg text-center text-gray-600">
            Check out our list of awesome services below.
          </p>

          <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            {services.data.map((service) => (
              <div
                key={service.id}
                class="rounded-md relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl"
              >
                <div class="p-3 text-white bg-blue-500 rounded-full">
                  <img src={service.attributes.icon} />
                </div>
                <h4 class="text-xl font-medium text-gray-700">
                  {service.attributes.title}
                </h4>
                <p class="text-base text-center text-gray-500">
                  {service.attributes.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default index;
