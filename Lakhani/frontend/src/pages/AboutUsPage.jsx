import { useState, useEffect } from "react";
import { shopInfoService } from "../services/api";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const AboutUsPage = () => {
  const [shopInfo, setShopInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const fetchShopInfo = async () => {
      try {
        setLoading(true);
        const { data } = await shopInfoService.getShopInfo();
        setShopInfo(data);
      } catch (err) {
        console.error("Error fetching shop info:", err);
        setError("Failed to load store information. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    setCurrentDay(days[today.getDay()]);

    fetchShopInfo();
  }, []);

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.street}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`;
  };

  const getGoogleMapsUrl = (address) => {
    const formattedAddress = encodeURIComponent(formatAddress(address));
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyCV2zJ_h4crOd7Q83SCdx1G5PKalVvWMvc&q=${formattedAddress}&zoom=16`;
  };

  const isStoreOpenNow = () => {
    if (!shopInfo || !shopInfo.storeHours) return "Checking...";

    const now = new Date();
    const todayHours = shopInfo.storeHours.find((h) => h.day === currentDay);

    if (!todayHours || todayHours.isClosed) return "Closed";
    if (todayHours.openTime === "Closed" || todayHours.closeTime === "Closed") return "Closed";

    const openTime = new Date(`${now.toDateString()} ${todayHours.openTime}`);
    const closeTime = new Date(`${now.toDateString()} ${todayHours.closeTime}`);

    return now >= openTime && now <= closeTime ? "Open Now" : "Closed";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">About Us</h1>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About {shopInfo?.shopName}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {shopInfo?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Contact + Map + Hours */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="bg-gray-900 rounded-lg p-8 shadow-xl order-2 md:order-1">
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-amber-600 pb-4">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-5">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                    <p className="text-gray-300">{formatAddress(shopInfo?.address)}</p>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(formatAddress(shopInfo?.address))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-500 mt-2 inline-block"
                    >
                      Get Directions <ExternalLink size={14} className="inline ml-1" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-5">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">
                      <a href={`tel:${shopInfo?.contactNumber}`} className="text-amber-600 hover:text-amber-500">
                        {shopInfo?.contactNumber}
                      </a>
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Call us directly for immediate assistance</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-5">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">
                      <a href={`mailto:${shopInfo?.email}`} className="text-amber-600 hover:text-amber-500">
                        {shopInfo?.email}
                      </a>
                    </p>
                    <p className="text-sm text-gray-400 mt-1">We'll respond as soon as possible</p>
                  </div>
                </div>

                {/* Social */}
                <div className="pt-6 border-t border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {shopInfo?.socialMedia?.facebook && (
                      <a href={shopInfo.socialMedia.facebook} target="_blank" rel="noreferrer" className="social-icon hover:bg-blue-600">
                        <Facebook size={20} />
                      </a>
                    )}
                    {shopInfo?.socialMedia?.twitter && (
                      <a href={shopInfo.socialMedia.twitter} target="_blank" rel="noreferrer" className="social-icon hover:bg-blue-400">
                        <Twitter size={20} />
                      </a>
                    )}
                    {shopInfo?.socialMedia?.instagram && (
                      <a href={shopInfo.socialMedia.instagram} target="_blank" rel="noreferrer" className="social-icon hover:bg-pink-600">
                        <Instagram size={20} />
                      </a>
                    )}
                    {shopInfo?.socialMedia?.linkedin && (
                      <a href={shopInfo.socialMedia.linkedin} target="_blank" rel="noreferrer" className="social-icon hover:bg-blue-700">
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Hours */}
            <div className="order-1 md:order-2">
              <div className="h-72 md:h-96 bg-gray-800 rounded-lg overflow-hidden mb-8">
                {shopInfo?.location && (
                  <iframe
                    title="Store Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={getGoogleMapsUrl(shopInfo.address)}
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Store Hours</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isStoreOpenNow() === "Open Now" ? "bg-green-600" : "bg-red-600"
                    } text-white`}
                  >
                    {isStoreOpenNow()}
                  </span>
                </div>
                <ul className="space-y-3">
                  {shopInfo?.storeHours?.map((hours) => (
                    <li
                      key={hours.day}
                      className={`flex justify-between py-2 border-b border-gray-800 ${
                        hours.day === currentDay ? "text-amber-600" : "text-white"
                      }`}
                    >
                      <span className="font-medium">{hours.day}</span>
                      <span>
                        {hours.isClosed ? "Closed" : `${hours.openTime} - ${hours.closeTime}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-gray-300 leading-relaxed">
            At {shopInfo?.shopName}, we take pride in our heritage and craftsmanship. Our journey began with a passion for creating exquisite jewelry that tells a story and becomes a cherished part of your life’s most precious moments.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-700 to-amber-600 rounded-lg shadow-xl overflow-hidden">
            <div className="p-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Visit Our Store Today</h2>
              <p className="text-white text-lg mb-8 max-w-xl mx-auto">
                Experience our collection in person and let our experts help you find the perfect piece for any occasion.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`tel:${shopInfo?.contactNumber}`}
                  className="bg-white text-amber-700 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone size={18} className="inline mr-2" /> Call Us
                </a>
                <a
                  href={`mailto:${shopInfo?.email}`}
                  className="border-2 border-white text-white py-3 px-8 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  <Mail size={18} className="inline mr-2" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
