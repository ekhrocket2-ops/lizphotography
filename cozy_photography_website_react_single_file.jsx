import React from 'react';
import { motion } from 'framer-motion';

export default function LizPhotography() {
  return (
    <div className="min-h-screen bg-cream text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-sm bg-white/80 backdrop-blur sticky top-0 z-50">
        <h1 className="text-2xl font-serif tracking-wide text-rose-800">LizPhotography</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-rose-700">About</a>
          <a href="#portfolio" className="hover:text-rose-700">Portfolio</a>
          <a href="#book" className="hover:text-rose-700">Book</a>
          <a href="#contact" className="hover:text-rose-700">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center text-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 drop-shadow-lg">Capturing Warmth, Light & Connection</h2>
          <p className="text-lg max-w-xl mx-auto mb-8 drop-shadow-lg">
            Hi, I’m Liz — a photographer who loves capturing the calm and cozy moments between families, friends, couples, and seniors.
          </p>
          <a href="#book" className="bg-rose-700 text-white px-6 py-3 rounded-2xl hover:bg-rose-600 transition">Book a Session</a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-serif text-rose-800 mb-6 text-center">My Story</h3>
        <p className="text-lg leading-relaxed text-gray-700 text-center">
          Photography started as a small passion and quickly became my way of freezing time — holding onto those fleeting, beautiful moments that make life meaningful.
          Whether it’s a laugh shared between friends, a senior’s proud smile, or the comfort of family, I want every photo to feel calm, cozy, and real.
        </p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-rose-50 py-16">
        <h3 className="text-3xl font-serif text-rose-800 mb-10 text-center">Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[1,2,3,4,5,6].map(i => (
            <motion.img
              key={i}
              src={`https://source.unsplash.com/600x600/?photography,portrait,${i}`}
              alt={`Photo ${i}`}
              className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="max-w-3xl mx-auto py-16 px-6 text-center">
        <h3 className="text-3xl font-serif text-rose-800 mb-6">Book a Session</h3>
        <p className="text-gray-700 mb-8">Let’s make something beautiful together. Choose your session type and get in touch below!</p>
        <form className="grid gap-4 max-w-md mx-auto text-left">
          <input type="text" placeholder="Name" className="border rounded-xl p-3 focus:outline-rose-400" />
          <input type="email" placeholder="Email" className="border rounded-xl p-3 focus:outline-rose-400" />
          <input type="text" placeholder="Session Type (Family, Senior, Couple, etc.)" className="border rounded-xl p-3 focus:outline-rose-400" />
          <textarea placeholder="Message" className="border rounded-xl p-3 focus:outline-rose-400" rows="4"></textarea>
          <button className="bg-rose-700 text-white py-3 rounded-2xl hover:bg-rose-600 transition">Send Message</button>
        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-rose-100 py-16 text-center">
        <h3 className="text-3xl font-serif text-rose-800 mb-6">Contact Me</h3>
        <p className="text-lg text-gray-700 mb-4">Email: <a href="mailto:ekhrocket2@gmail.com" className="text-rose-700 hover:underline">ekhrocket2@gmail.com</a></p>
        <p className="text-lg text-gray-700 mb-4">Instagram: <a href="https://instagram.com/3lizphotography" target="_blank" rel="noopener noreferrer" className="text-rose-700 hover:underline">@3lizphotography</a></p>
        <p className="text-lg text-gray-700 mb-4">Phone: <a href="tel:+15072362993" className="text-rose-700 hover:underline">(507) 236-2993</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-sm text-gray-600 border-t">
        <p>© {new Date().getFullYear()} LizPhotography | <a href="mailto:ekhrocket2@gmail.com" className="text-rose-700 hover:underline">ekhrocket2@gmail.com</a></p>
        <p className="mt-2">
          <a href="https://instagram.com/3lizphotography" target="_blank" rel="noopener noreferrer" className="hover:text-rose-700">Instagram</a> · <a href="tel:+15072362993" className="hover:text-rose-700">(507) 236-2993</a>
        </p>
      </footer>
    </div>
  );
}
