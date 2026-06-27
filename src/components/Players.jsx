import { useState } from "react";
import { motion } from "framer-motion";
import { FaVolleyballBall, FaMedal } from "react-icons/fa";
import { players } from "../data/players";

export default function Players() {
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState("All");

  const positions = [
    "All",
    "Setter",
    "Outside Hitter",
    "Middle Blocker",
    "Opposite",
    "Libero",
  ];

  const filteredPlayers = players.filter((player) => {
    const matchesName = player.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesPosition =
      position === "All" || player.position === position;

    return matchesName && matchesPosition;
  });

  return (
    <section id="players" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-green-400">
            Meet Our Team
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Milkipur Volleyball Players
          </h2>
        </motion.div>

        {/* Search & Filter */}
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search player..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-gray-300 outline-none backdrop-blur-md"
          />

          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white outline-none"
          >
            {positions.map((item) => (
              <option key={item} value={item} className="text-black">
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Player Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md shadow-xl"
            >
              <img
                src={player.image}
                alt={player.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                {player.captain && (
                  <span className="inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase text-black">
                    ⭐ Captain
                  </span>
                )}

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {player.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-500 px-3 py-1 text-sm text-white">
                    <FaVolleyballBall className="mr-1 inline" />
                    {player.position}
                  </span>

                  <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm text-black">
                    <FaMedal className="mr-1 inline" />
                    {player.experience}
                  </span>
                </div>

                <button className="mt-6 w-full rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <p className="mt-10 text-center text-lg text-gray-400">
            No players found.
          </p>
        )}
      </div>
    </section>
  );
}