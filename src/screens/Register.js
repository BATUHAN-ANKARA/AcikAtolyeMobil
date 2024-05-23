import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleLogin = () => {
    if (
      email === '' ||
      email === null ||
      password === '' ||
      password === null ||
      name === '' ||
      name === null ||
      surname === '' ||
      surname === null
    ) {
      Alert.alert('Form Error', 'Please Enter All Inputs', [
        {text: 'Ok', style: 'cancel'},
      ]);
    } else {
      //navigation.navigate('BottomTab');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/deneme.jpeg')}
            style={styles.headerImg}
          />

          <Text style={styles.title}>Sign up to MyApp</Text>

          <Text style={styles.subtitle}>
            Get access to your portfolia an more
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Name</Text>

            <TextInput
              autoCorrect={false}
              keyboardType="default"
              style={styles.inputControl}
              placeholder="Enter your name"
              placeholderTextColor="#6b7280"
              onChangeText={name => setName(name)}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Surname</Text>

            <TextInput
              autoCorrect={false}
              keyboardType="default"
              style={styles.inputControl}
              placeholder="Enter your surname"
              placeholderTextColor="#6b7280"
              onChangeText={surname => setSurname(surname)}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email Adress</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={styles.inputControl}
              placeholder="E-mail Adress"
              placeholderTextColor="#6b7280"
              onChangeText={email => setEmail(email)}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              secureTextEntry
              style={styles.inputControl}
              placeholder="Enter your password"
              placeholderTextColor="#6b7280"
              onChangeText={password => setPassword(password)}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleLogin}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign up</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{marginTop: 'auto'}}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.formFooter}>
              Already have an account?{' '}
              <Text style={{textDecorationLine: 'underline'}}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1e1e1e',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  btn: {
    backgroundColor: '#2B4865',
    borderRadius: 8,
    borderColor: '#2B4865',
    alignItems: 'center',
    justinfyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff',
  },
});