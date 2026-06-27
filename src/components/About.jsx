import { motion } from "framer-motion";
import { FaVolleyballBall, FaUsers, FaTrophy, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  const stats = [
    {
      icon: <FaVolleyballBall />,
      value: "500+",
      title: "Matches Played",
    },
    {
      icon: <FaUsers />,
      value: "200+",
      title: "Players",
    },
    {
      icon: <FaTrophy />,
      value: "25+",
      title: "Tournaments",
    },
    {
      icon: <FaMapMarkerAlt />,
      value: "Milkipur",
      title: "Location",
    },
  ];

  return (
    <section id="about" className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-center font-semibold uppercase tracking-[6px] text-green-600">
            About Us
          </p>

          <h2 className="mt-4 text-center text-4xl font-bold md:text-5xl">
            The Heart of Volleyball in Milkipur
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-gray-600">
            Milkipur Volleyball Arena is more than a playground—it's a gathering
            place where athletes, friends, and families come together to enjoy
            the game, build teamwork, and celebrate community spirit.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold">{item.value}</h3>

              <p className="mt-2 text-gray-500">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}