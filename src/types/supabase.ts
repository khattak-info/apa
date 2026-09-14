export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      admin_roles: {
        Row: {
          granted_at: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          granted_at?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          granted_at?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      council_members: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          email: string | null
          id: string
          legacy_id: number | null
          name: string
          photo_url: string | null
          role: string
          term: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number
          email?: string | null
          id?: string
          legacy_id?: number | null
          name: string
          photo_url?: string | null
          role: string
          term?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          email?: string | null
          id?: string
          legacy_id?: number | null
          name?: string
          photo_url?: string | null
          role?: string
          term?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      events: {
        Row: {
          category: string
          created_at: string
          description: string | null
          display_date: string | null
          donation_link: string | null
          end_time: string | null
          event_date: string | null
          gallery_html: string | null
          id: string
          iframe_donation_html: string | null
          iframe_html: string | null
          image_url: string | null
          image1_url: string | null
          legacy_id: number | null
          location: string | null
          main_event: boolean
          member_discount: boolean
          registration_deadline: string | null
          registration_url: string | null
          start_time: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          display_date?: string | null
          donation_link?: string | null
          end_time?: string | null
          event_date?: string | null
          gallery_html?: string | null
          id?: string
          iframe_donation_html?: string | null
          iframe_html?: string | null
          image_url?: string | null
          image1_url?: string | null
          legacy_id?: number | null
          location?: string | null
          main_event?: boolean
          member_discount?: boolean
          registration_deadline?: string | null
          registration_url?: string | null
          start_time?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          display_date?: string | null
          donation_link?: string | null
          end_time?: string | null
          event_date?: string | null
          gallery_html?: string | null
          id?: string
          iframe_donation_html?: string | null
          iframe_html?: string | null
          image_url?: string | null
          image1_url?: string | null
          legacy_id?: number | null
          location?: string | null
          main_event?: boolean
          member_discount?: boolean
          registration_deadline?: string | null
          registration_url?: string | null
          start_time?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      members: {
        Row: {
          committee_member: boolean
          created_at: string
          dob: string | null
          gender: string | null
          id: string
          identity_number: string | null
          member_code: string
          membership_status: string
          name: string
          updated_at: string
          voter: boolean
          year_of_first_membership: number | null
          years_active: number | null
        }
        Insert: {
          committee_member?: boolean
          created_at?: string
          dob?: string | null
          gender?: string | null
          id?: string
          identity_number?: string | null
          member_code: string
          membership_status?: string
          name: string
          updated_at?: string
          voter?: boolean
          year_of_first_membership?: number | null
          years_active?: number | null
        }
        Update: {
          committee_member?: boolean
          created_at?: string
          dob?: string | null
          gender?: string | null
          id?: string
          identity_number?: string | null
          member_code?: string
          membership_status?: string
          name?: string
          updated_at?: string
          voter?: boolean
          year_of_first_membership?: number | null
          years_active?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_member_directory: {
        Args: never
        Returns: {
          committee_member: boolean
          gender: string
          membership_status: string
          name: string
          voter: boolean
          year_of_first_membership: number
          years_active: number
        }[]
      }
      has_role: {
        Args: { check_role: Database["public"]["Enums"]["app_role"] }
        Returns: boolean
      }
      list_admin_users: {
        Args: never
        Returns: {
          email: string
          roles: Database["public"]["Enums"]["app_role"][]
          user_id: string
        }[]
      }
    }
    Enums: {
      app_role: "admin" | "events_editor" | "council_editor" | "members_editor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database["public"]

export type Tables<
  DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]),
> = (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends { Row: infer R } ? R : never

export type TablesInsert<
  T extends keyof DefaultSchema["Tables"],
> = DefaultSchema["Tables"][T] extends { Insert: infer I } ? I : never

export type TablesUpdate<
  T extends keyof DefaultSchema["Tables"],
> = DefaultSchema["Tables"][T] extends { Update: infer U } ? U : never

export type Enums<T extends keyof DefaultSchema["Enums"]> = DefaultSchema["Enums"][T]
