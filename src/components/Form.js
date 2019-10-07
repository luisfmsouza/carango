import React from "react";
import styled from "styled-components";

import { ReactComponent as IconRight } from "../assets/icons/arrow-right.svg";
import colors from "../theme/colors";

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Group = styled.div`
  margin-top: 30px;
  position: relative;
`;

const Label = styled.label`
  color: ${colors.grey20};
  display: block;
  font-family: LeasePlan, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  ${({ hasError }) => hasError && `color: ${colors.red30}`}
`;

const InputContainer = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.grey15};
  border-radius: 2px;
  position: relative;
  width: 100%;

  ${({ hasError }) => hasError && `background-color: ${colors.red10}`}
  ${({ hasError }) => hasError && `border-color: ${colors.red30}`}

  &::after {
    ${({ hasError }) =>
      hasError &&
      `
        background-color: ${colors.red20};
        border-radius: 11px;
        box-sizing: border-box;
        color: ${colors.red30};
        content: "!";
        display: block;
        height: 22px;
        padding: 3px 0;
        position: absolute;
        right: 13px;
        text-align: center;
        top: 15px;
        width: 22px;
      `}
  }
`;

const Input = styled.input`
  background-color: transparent;
  border: 0;
  box-sizing: border-box;
  font-family: LeasePlan, Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  padding: 15px 50px 15px 15px;
  width: 100%;
`;

const ErrorMessage = styled.span`
  color: ${colors.red30};
  display: block;
  font-family: LeasePlan, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 8px;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  margin-left: 8px;
  vertical-align: middle;

  ${({ hasError }) => hasError && `color: ${colors.red30}`}
`;

const CheckboxInput = styled.input`
  cursor: pointer;
  height: 22px;
  margin: 0;
  opacity: 0;
  order: 1;
  position: absolute;
  vertical-align: middle;
  width: 22px;
  z-index: 1;

  &:checked ~ span::after {
    color: ${colors.grey20};
  }
`;

const CheckboxShape = styled.span`
  vertical-align: middle;

  &::before {
    background-color: ${colors.white};
    border: 1px solid ${colors.grey15};
    border-radius: 2px;
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;

    ${({ hasError }) => hasError && `background-color: ${colors.red10}`}
    ${({ hasError }) => hasError && `border-color: ${colors.red30}`}
  }

  &::after {
    color: ${colors.white};
    content: "";
    border-bottom: 2px solid;
    border-left: 2px solid;
    height: 6px;
    left: 5px;
    position: absolute;
    top: 5px;
    transform: rotate(-45deg);
    width: 10px;

    ${({ hasError }) => hasError && `color: ${colors.red10}`}
  }
`;

const Button = styled.button`
  background: linear-gradient(to right, ${colors.orange10}, ${colors.orange20});
  border-width: 0px;
  border-radius: 50px;
  cursor: pointer;
  color: ${colors.white};
  font-family: LeasePlan, Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 30px;
  padding: 18px 25px 18px 35px;
  text-transform: uppercase;

  &:disabled {
    background: linear-gradient(to right, ${colors.grey10}, ${colors.grey15});
  }
`;

const ButtonText = styled.span`
  margin-right: 15px;
  vertical-align: middle;
`;

const StyledIconRight = styled(IconRight)`
  fill: ${colors.white};
  vertical-align: middle;
  width: 15px;
`;

export default ({
  formState,
  shouldBlockFormSubmission,
  handleInputChange,
  handleInputBlur,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <Column>
      <Group>
        <Label htmlFor="firstName" hasError={formState.firstName.hasError}>
          First name
        </Label>
        <InputContainer hasError={formState.firstName.hasError}>
          <Input
            id="firstName"
            placeholder="Enter first name"
            type="text"
            hasError={formState.firstName.hasError}
            value={formState.firstName.value}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </InputContainer>
        {formState.firstName.hasError && (
          <ErrorMessage>Invalid first name</ErrorMessage>
        )}
      </Group>

      <Group>
        <Label htmlFor="surname" hasError={formState.surname.hasError}>
          Surname
        </Label>
        <InputContainer hasError={formState.surname.hasError}>
          <Input
            id="surname"
            placeholder="Enter surname"
            type="text"
            hasError={formState.surname.hasError}
            value={formState.surname.value}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </InputContainer>
        {formState.surname.hasError && (
          <ErrorMessage>Invalid surname</ErrorMessage>
        )}
      </Group>
    </Column>

    <Group>
      <Label htmlFor="email" hasError={formState.email.hasError}>
        Email address
      </Label>
      <InputContainer hasError={formState.email.hasError}>
        <Input
          id="email"
          placeholder="Enter your email address"
          type="email"
          hasError={formState.email.hasError}
          value={formState.email.value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </InputContainer>
      {formState.email.hasError && (
        <ErrorMessage>Invalid email address</ErrorMessage>
      )}
    </Group>

    <Group>
      <Label htmlFor="phoneNumber" hasError={formState.phoneNumber.hasError}>
        Phone number
      </Label>
      <InputContainer hasError={formState.phoneNumber.hasError}>
        <Input
          id="phoneNumber"
          placeholder="Enter your phone number"
          type="tel"
          hasError={formState.phoneNumber.hasError}
          value={formState.phoneNumber.value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </InputContainer>
      {formState.phoneNumber.hasError && (
        <ErrorMessage>Invalid phone number</ErrorMessage>
      )}
    </Group>

    <Group>
      <Label htmlFor="voucherCode" hasError={formState.voucherCode.hasError}>
        Voucher code
      </Label>
      <InputContainer hasError={formState.voucherCode.hasError}>
        <Input
          id="voucherCode"
          placeholder="Enter your voucher code"
          type="number"
          hasError={formState.voucherCode.hasError}
          value={formState.voucherCode.value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </InputContainer>
      {formState.voucherCode.hasError && (
        <ErrorMessage>Invalid voucher code</ErrorMessage>
      )}
    </Group>

    <Group>
      <CheckboxInput
        id="acceptPrivacy"
        type="checkbox"
        checked={formState.acceptPrivacy.value}
        onChange={handleInputChange}
      />
      <CheckboxShape hasError={formState.acceptPrivacy.hasError} />
      <CheckboxLabel
        htmlFor="acceptPrivacy"
        hasError={formState.acceptPrivacy.hasError}
      >
        Accept Privacy Settlement
      </CheckboxLabel>
    </Group>

    <Button type="submit" disabled={shouldBlockFormSubmission}>
      <ButtonText>Get Offer</ButtonText>
      <StyledIconRight />
    </Button>
  </form>
);
