import NewMessage from '../../componnents/newMessage';
import styles from './style.module.css';

export default function Addressee() {
  const handleSubmit = (e) => {
    e.preventDefault(); // מניעת הגשת הטופס באופן רגיל

    const formData = new FormData(e.target); // יצירת אובייקט FormData מהטופס
    const email = formData.get('email'); // קבלת הערך של השדה 'email'
    const subject = formData.get('subject'); // קבלת הערך של השדה 'subject'

    console.log('Email:', email);
    console.log('Subject:', subject);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="To" />
        <input type="text" name="subject" placeholder="Subject" />
        <button type="submit" className={"hidden"}></button>
      </form>
      <NewMessage />
    </div>
  );
}
