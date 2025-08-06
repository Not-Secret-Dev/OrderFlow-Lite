import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 2rem;

  img {
    width: 40vw;
    max-width: 500px;
    height: auto;
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;

    img {
      display: none;
    }
  }
`;

const FormDetail = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  max-width: 500px;
  margin: 1rem auto;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.25rem;
    gap: 1rem;
  }
`;

const FormLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  color: #495057;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #3dbbaa;
    box-shadow: 0 0 0 3px rgba(61, 187, 170, 0.25);
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 0.65rem 0.9rem;
    font-size: 0.9rem;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4ae3cf;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  color: #0d1a1a;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3dbbaa;
  }

  &:active {
    background-color: #3dbbaa;
  }

  @media (max-width: 480px) {
    padding: 0.65rem;
    font-size: 0.9rem;
  }
`;

const OrderForm = () => {
  return (
    <Wrapper>
      <img src="/delivery-man.png" alt="delivery-man" />
      <FormDetail method="post">
        <FormLabel>
          Username:
          <FormInput
            type="text"
            name="username"
            placeholder="Enter your name"
            required
          />
        </FormLabel>
        <FormLabel>
          Phone Number:
          <FormInput
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </FormLabel>
        <FormLabel>
          Description:
          <FormInput
            type="text"
            name="desc"
            placeholder="Enter order details"
            required
          />
        </FormLabel>
        <SubmitButton type="submit">Submit Order</SubmitButton>
      </FormDetail>
    </Wrapper>
  );
};

export default OrderForm;
