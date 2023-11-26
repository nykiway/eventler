import {
  Skeleton,
  Flex,
  useDisclosure,
  Button,
  styled,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, Form, Formik } from "formik";
import { PrimaryButton } from "../styles/components/Buttons";

const AddNewEventModal = ({
  onOpen,
  onClose,
  isOpen,
}: {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}) => {
  const [eventDate, setEventDate] = useState<Date | null>(new Date());

  function validateEventName(value) {
    if (!value) return "Event name is required";
  }

  return (
    <Modal onClose={onClose} isOpen={true}>
      <ModalOverlay />
      <ModalContent bg="white" p={5}>
        <ModalCloseButton />
        <Text textAlign="center" fontSize="20px">
          Add a New Event
        </Text>
        <Formik
          onSubmit={(values, actions) => {
            //do something
          }}
          initialValues={{
            eventName: "",
            eventDate: eventDate,
            numberOfGuests: 1,
          }}
        >
          {(props) => (
            <Form>
              <Flex flexDir="column" gap={5}>
                <Field eventName="eventName" validate={validateEventName}>
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl>
                      <StyledFormLabel>Event Name</StyledFormLabel>
                      <Input
                        placeholder="Avneet's Birthday Party"
                        type="text"
                      />
                      <FormErrorMessage>
                        {form.errors.eventName}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field>
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl>
                      <StyledFormLabel>Event Date</StyledFormLabel>
                      <Flex gap={4}>
                        <Text>👉</Text>
                        <DatePicker
                          selected={eventDate}
                          onChange={(date) => setEventDate(date)}
                        />
                      </Flex>
                    </FormControl>
                  )}
                </Field>
                <Field>
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl>
                      <StyledFormLabel>Event Date</StyledFormLabel>
                      <NumberInput step={1} defaultValue={1} min={1}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      <FormHelperText>
                        Don't worry, you will be able to add their names later.
                      </FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <PrimaryButton isLoading={props.isSubmitting} type="submit">
                  Submit
                </PrimaryButton>
              </Flex>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default AddNewEventModal;

const StyledFormLabel = styled(FormLabel, {
  baseStyle: {
    textTransform: "uppercase",
    fontSize: "10px",
    letterSpacing: "0.18em",
    fontWeight: 700,
  },
});
