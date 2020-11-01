import React from 'react';
import { grommet, Box, FormField, Form, Text, Button, Grommet } from 'grommet';

const FormFieldLabel = props => {
    const { required, label, ...rest } = props;
    return (
      <FormField
        label={
          required ? (
            <Box direction="row">
              <Text>{label}</Text>
              <Text color="status-critical">*</Text>
            </Box>
          ) : (
            label
          )
        }
        required={required}
        {...rest}
      />
    );
  };
  
  const Formulaire = () => (
      <Box align="center" justify='center' pad="large">
        <Form>
          <FormFieldLabel name="firstName" label="FirstName" required />
          <FormFieldLabel name="LastName" label="LastName" required />
          <FormFieldLabel name="email" label="Email" />
          <FormField name="message" label="Message" required/>
          <Button type="submit" label="Submit" color='neutral-3' />
          <Text margin={{ left: 'small' }} size="small" color="status-critical">
            * Required Field
          </Text>
        </Form>
      </Box>
  );

export default Formulaire


