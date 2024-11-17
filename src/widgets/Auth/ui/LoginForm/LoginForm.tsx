import { Link } from 'react-router-dom';
import { Button, Checkbox, Group, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import cn from 'classnames';

import cls from './styles.module.scss';

type TLoginForm = {
    className?: string;
};

export const LoginForm = ({ className }: TLoginForm) => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/u.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length >= 8 ? null : 'Password must be at least 8 characters long'),
            termsOfService: (value) => (value ? null : 'You must agree to the terms of service'),
        },
    });

    return (
        <div className={cn(className, cls.login_form)}>
            <div>
                <Title order={1}>Sign in</Title>
                <Text size="sm" c="dimmed">
                    Hey there, welcome back!
                </Text>
            </div>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput withAsterisk label="Email" key={form.key('email')} {...form.getInputProps('email')} />
                <TextInput
                    mt="md"
                    withAsterisk
                    label="Password"
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                />

                <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    key={form.key('termsOfService')}
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                />

                <Group justify="flex-end" mt="md">
                    <Button type="submit" variant="filled">
                        Submit
                    </Button>
                </Group>
            </form>
            <Text>
                Not a member? <Link to="/register">Sign up</Link>
            </Text>
        </div>
    );
};
