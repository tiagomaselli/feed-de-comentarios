export default function TextInput({ email, setEmail }) {
  return (
    <div>
      <label htmlFor="email">Email:</label> 
      <br />
      <input 
        type="text" 
        name="email" 
        id="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  )
}