// import AmoCRM from "amocrm-js";
const AmoCRM = require("amocrm-js")

export const crm = new AmoCRM({
  domain: "merslyakovkg6.amocrm.ru",
  auth: {
    client_id: "5decbd24-6daa-48f2-a315-b841c55a22f0", 
    client_secret:
      "mZw7w4m3pnutt03axx2FzlGh5CISOtrMmVSzJVrli0V11iBWYnFFF0uCzwghnljA", 
    redirect_uri: "https://e1b8-94-140-134-34.eu.ngrok.io", 
    // code: "def50200962700fe8e1c81ba87dd4a666c25df3bf85aa1fec61de5919446743bffd63476a6bc0191a749116c1a4b454294d20fff9c6840d3d9311bddbb9868fb70b501f38a61f00aad5d9f97b9404adcd49bb433471f3a9b0807f450c56a4fe56f6a68781bd1809420307d844556e1b42a49ee956e5189a65c631dcb00a764a51e45b9a60c1b7a08d5a1337e316514334353ceebc751b5fe138657825fde8f2a156f20e0df2ebcba22e656025e3c9c27bc643014b8523c8c8589c4c22d282bb6a81b3122201ecb3893342ea503d7617ccc70e1dbc13e3a35016afa287b246dbc27b0239d973354ddbfe82a40a9e6da5a0560eb989da3b573621b21fb2407d37d03059279ac7c94aea9b191b153e1cbe0d68ee09f2f5ba72c88384a1f8c8ddc121f670eafa9f768c8939591a98ed5880b46e8e94c4bd05a6f3ca00dd2b247e200f4457d580e83f2a5c0b486df2810b783e1b0e9bed66101fe111ee3e131452b370291916e77a886c461a1e07bdb2faded8a7fe77bde957c7d5ef1e73a8548a8a169b10c8d3fea44c8d620c99bcb329a603c503bfd033a72d960c53ce45bf2afe788f230efdf3ca8dfc708904c3ca998d0d692f0862a63dd54946567be4bb44eb6a5f543ad2c6a901c8ac67f742a382f9f13830970", // Код для упрощённой авторизации, необязательный

    server: {
      port: 3001,
    },
  },
});

