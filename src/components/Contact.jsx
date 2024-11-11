import React from "react";

function Contact() {
    return (
        <section id="contact" className="contact max-w-3xl mx-auto p-6 bg-gray-800 bg-opacity-60 rounded-lg">
            <h2 className="font-sans font-bold text-4xl text-white text-center mb-6">Contact Me</h2>
            <hr></hr>
            <form className="flex flex-col gap-4 py-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="p-2 h-32 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}

export default Contact;
