import MockAdapter from "axios-mock-adapter";
import req, { client } from "../api//HttpClient"

const mockAxios = new MockAdapter(client)

describe('HttpClient', () => {
  test('req should return 200.', async () => {
    mockAxios.onPost('/graphql').reply(200)
    const res = await req('/graphql')
    expect(res.status).toEqual(200)
  })
})