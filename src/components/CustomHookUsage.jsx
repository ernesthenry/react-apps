import useForm from './useForm';

const FormComponent = () => {
  const [formValues, handleInputChange] = useForm({ name: '', email: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
