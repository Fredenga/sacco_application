import { Button, Modal, TextInput } from "@mantine/core";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Outcome } from "./Notifications";

interface Type {
  setOpen: Dispatch<
    SetStateAction<{
      status: boolean;
      type: string;
    }>
  >;
  open: {
    status: boolean;
    type: string;
  };
}

function TransactionModal({ setOpen, open }: Type) {
  const user = useSelector((state: any) => state.user.user);
  const [phoneNumber, setPhoneNumber] = useState<string>(user.phoneNumber);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleWithDraw = async ({
    phoneNumber,
    userId,
    amount,
  }: {
    phoneNumber: number;
    amount: number;
    userId: string;
  }) => {
    return axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URI! + "/bank/outwithdraw",
      {
        phoneNumber,
        amount,
        userId,
      }
    );
  };

  const handleSubmit = async () => {

    setLoading(true);
    const PhoneNumber =
      phoneNumber[1] === "+"
        ? Number(phoneNumber.split("+")[1])
        : Number(phoneNumber);


    if (open.type === "deposit") {
      setLoading(true);
      try {
        const PhoneNumber =
          phoneNumber[1] === "+"
            ? Number(phoneNumber.split("+")[1])
            : Number(phoneNumber);

        const data = await handleDeposit({
          phoneNumber: PhoneNumber,
          amount,
          userId: user._id,
        });
        Outcome("Payment Success", data.ResponseDescription, "green");
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        console.log(error);
        Outcome(
          "Payment failed",
          error.message || error.response.message,
          "red"
        );
      }
    } else if (open.type === "withdraw") {

      try {
        const { data } = await handleWithDraw({
          phoneNumber: PhoneNumber,
          amount,
          userId: user._id,
        });

        Outcome("Payment Success", data.ResponseDescription, "green");
        setLoading(false);
      } catch (error: any) {
        setLoading(false);

        Outcome("Payment failed", error.response.data.message, "red");
      }

    }
  };

  return (
    <Modal
      opened={open.status}
      onClose={() => setOpen({ status: false, type: "" })}
      title={open.type}
    >
      <TextInput
        py={10}
        required
        label="phoneNumber"
        placeholder="phoneNumber"
        type="tel"
        value={phoneNumber ? phoneNumber : ""}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <TextInput
        py={10}
        required
        label="amount"
        placeholder="amount"
        type="number"
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
      />
      <Button
        py={10}
        size={"lg"}
        color={"green"}
        variant="outline"
        onClick={handleSubmit}
        loading={loading}
      >
        {open.type}
      </Button>
    </Modal>
  );
}

export default TransactionModal;

const handleDeposit = async ({
  phoneNumber,
  userId,
  amount,
}: {
  phoneNumber: number;
  amount: number;
  userId: string;
}) => {

  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URI!, {
      phoneNumber,
      amount,
      userId,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};


const handleWithDraw = async ({
  phoneNumber,
  userId,
  amount,
}: {
  phoneNumber: number;
  amount: number;
  userId: string;
}) => {
  return axios.post(
    process.env.NEXT_PUBLIC_BACKEND_URI! + "/bank/outwithdraw",
    {
      phoneNumber,
      amount,
      userId,
    }
  );
};

