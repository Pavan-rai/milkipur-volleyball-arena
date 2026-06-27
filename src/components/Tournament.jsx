import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from "react-icons/fa";
import { tournaments } from "../data/tournaments";

export default function Tournament() {
  return (
    <section
      id="tournaments"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-green-600">
            Events
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Upcoming Tournaments
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg transition"
            >
              <FaTrophy className="text-5xl text-yellow-500" />

              <h3 className="mt-6 text-2xl font-bold">
                {event.title}
              </h3>

              <div className="mt-5 flex items-center gap-3 text-gray-600">
                <FaCalendarAlt />
                {event.date}
              </div>

              <div className="mt-3 flex items-center gap-3 text-gray-600">
                <FaMapMarkerAlt />
                {event.location}
              </div>

              <span className="mt-6 inline-block rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white">
                {event.status}
              </span>

              <button className="mt-8 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-green-600">
                Register Now
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}