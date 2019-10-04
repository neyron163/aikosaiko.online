import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// @ts-ignore
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Welcome to the administration" />
        <CardContent>Добро Пожаловать мазафака</CardContent>
    </Card>
);