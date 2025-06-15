'use server';

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";
// import { revalidatePath } from "next/cache";

export const createHumain = async (formData: CreateHumain) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('humains')
        .insert({...formData, author })
        .select();

    if(error || !data) throw new Error(error?.message || 'Failed to create a humain');

    return data[0];
}

// export const getAllHumains = async ({ limit = 10, page = 1, subject, topic }: GetAllHumains) => {
//     const supabase = createSupabaseClient();

//     let query = supabase.from('humains').select();

//     if(subject && topic) {
//         query = query.ilike('subject', `%${subject}%`)
//             .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
//     } else if(subject) {
//         query = query.ilike('subject', `%${subject}%`)
//     } else if(topic) {
//         query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
//     }

//     query = query.range((page - 1) * limit, page * limit - 1);

//     const { data: humains, error } = await query;

//     if(error) throw new Error(error.message);

//     return humains;
// }

// export const getHumain = async (id: string) => {
//     const supabase = createSupabaseClient();

//     const { data, error } = await supabase
//         .from('humains')
//         .select()
//         .eq('id', id);

//     if(error) return console.log(error);

//     return data[0];
// }

// export const addToSessionHistory = async (humainId: string) => {
//     const { userId } = await auth();
//     const supabase = createSupabaseClient();
//     const { data, error } = await supabase.from('session_history')
//         .insert({
//             humain_id: humainId,
//             user_id: userId,
//         })

//     if(error) throw new Error(error.message);

//     return data;
// }

// export const getRecentSessions = async (limit = 10) => {
//     const supabase = createSupabaseClient();
//     const { data, error } = await supabase
//         .from('session_history')
//         .select(`humains:humain_id (*)`)
//         .order('created_at', { ascending: false })
//         .limit(limit)

//     if(error) throw new Error(error.message);

//     return data.map(({ humains }) => humains);
// }

// export const getUserSessions = async (userId: string, limit = 10) => {
//     const supabase = createSupabaseClient();
//     const { data, error } = await supabase
//         .from('session_history')
//         .select(`humains:humain_id (*)`)
//         .eq('user_id', userId)
//         .order('created_at', { ascending: false })
//         .limit(limit)

//     if(error) throw new Error(error.message);

//     return data.map(({ humains }) => humains);
// }

// export const getUserHumains = async (userId: string) => {
//     const supabase = createSupabaseClient();
//     const { data, error } = await supabase
//         .from('humains')
//         .select()
//         .eq('author', userId)

//     if(error) throw new Error(error.message);

//     return data;
// }

// export const newHumainPermissions = async () => {
//     const { userId, has } = await auth();
//     const supabase = createSupabaseClient();

//     let limit = 0;

//     if(has({ plan: 'pro' })) {
//         return true;
//     } else if(has({ feature: "3_humain_limit" })) {
//         limit = 3;
//     } else if(has({ feature: "10_humain_limit" })) {
//         limit = 10;
//     }

//     const { data, error } = await supabase
//         .from('humains')
//         .select('id', { count: 'exact' })
//         .eq('author', userId)

//     if(error) throw new Error(error.message);

//     const humainCount = data?.length;

//     if(humainCount >= limit) {
//         return false
//     } else {
//         return true;
//     }
// }

// // Bookmarks
// export const addBookmark = async (humainId: string, path: string) => {
//   const { userId } = await auth();
//   if (!userId) return;
//   const supabase = createSupabaseClient();
//   const { data, error } = await supabase.from("bookmarks").insert({
//     humain_id: humainId,
//     user_id: userId,
//   });
//   if (error) {
//     throw new Error(error.message);
//   }
//   // Revalidate the path to force a re-render of the page

//   revalidatePath(path);
//   return data;
// };

// export const removeBookmark = async (humainId: string, path: string) => {
//   const { userId } = await auth();
//   if (!userId) return;
//   const supabase = createSupabaseClient();
//   const { data, error } = await supabase
//     .from("bookmarks")
//     .delete()
//     .eq("humain_id", humainId)
//     .eq("user_id", userId);
//   if (error) {
//     throw new Error(error.message);
//   }
//   revalidatePath(path);
//   return data;
// };

// // It's almost the same as getUserCompanions, but it's for the bookmarked companions
// export const getBookmarkedHumains = async (userId: string) => {
//   const supabase = createSupabaseClient();
//   const { data, error } = await supabase
//     .from("bookmarks")
//     .select(`humains:humain_id (*)`) // Notice the (*) to get all the companion data
//     .eq("user_id", userId);
//   if (error) {
//     throw new Error(error.message);
//   }
//   // We don't need the bookmarks data, so we return only the companions
//   return data.map(({ humains }) => humains);
// };