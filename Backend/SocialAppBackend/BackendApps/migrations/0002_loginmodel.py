# Generated by Django 3.1.4 on 2021-03-31 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackendApps', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='LoginModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=20)),
                ('lname', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=20)),
                ('confirmPassword', models.CharField(max_length=20)),
            ],
        ),
    ]
