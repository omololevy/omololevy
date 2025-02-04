import { motion } from "framer-motion";

const jobs = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our core team to build and scale our platform using modern technologies.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Create intuitive and beautiful experiences for our global user base.",
  },
  // Add more job openings as needed
];

export function JobOpenings() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#05347e] dark:text-[#ffbd59]">
          Open Positions
        </h2>
        <div className="max-w-4xl mx-auto">
          {jobs.length > 0 ? (
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-white dark:bg-[#051633] shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#05347e] dark:text-[#ffbd59] group-hover:text-[#ffbd59] dark:group-hover:text-[#05347e] transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {job.description}
                      </p>
                      <div className="flex gap-4">
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
                          {job.location}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="primary-button">Apply Now</button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-12 bg-white dark:bg-[#051633] rounded-lg shadow-lg"
            >
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-[#05347e] dark:text-[#ffbd59]">
                No Open Positions Right Now
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                We&apos;re not actively hiring at the moment, but we&apos;re always
                interested in meeting talented people.
              </p>
              <a
                href="mailto:careers@kiungor.com"
                className="primary-button inline-block"
              >
                Send Speculative Application
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
