import ContactForm from './form/contact-form.component';
import ScrollSnapSection from '../scroll-snap/scroll-snap-section/scroll-snap-section.component';
const ContactSection = () => {
  return (
    <ScrollSnapSection title={'contact'}>
      <ContactForm />
    </ScrollSnapSection>
  );
};

export default ContactSection;
