import { useQuery } from 'react-query'
import { StaffApi } from '../../../apis'

export const ServerStateKeys = {
  Staff: 'staff/getAll',
}

export const useGetStaff = () => useQuery([ServerStateKeys.Staff], () => StaffApi.getAll())

// export const useCreateItem = () => {
//   const cache = useQueryClient()
//   return useMutation(postCreateNewItem, {
//     // onMutate: (variables) => {
//     //   // A mutation is about to happen!
//     //   // Optionally return a context containing data to use when for example rolling back
//     // },
//     // onError: (error, variables, context) => {
//     //   // An error happened!
//     // },
//     onSuccess: () => {
//       cache.invalidateQueries(ServerStateKeys.Staff)
//     },
//     // onSettled: (data, error, variables, context) => {
//     //   // Error or success... doesn't matter!
//     // },
//   })
// }
