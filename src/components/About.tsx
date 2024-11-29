const About = () => {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80")',
          filter: 'blur(8px) brightness(0.7)'
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 text-center z-10">
        <h2 className="text-3xl font-bold text-white mb-8">About Top-Up</h2>
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-lg">
          <p className="text-lg text-gray-100 mb-6">
            Top-Up is your gateway to professional growth and personal development. We believe in making quality education accessible to everyone, everywhere.
          </p>
          <p className="text-lg text-gray-100">
            Our platform connects learners with expert instructors and industry-leading content, helping you master new skills at your own pace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;