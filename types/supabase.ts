export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      about_me: {
        Row: {
          created_at: string
          current_job: string | null
          current_office_url: string | null
          desc: string | null
          id: number
          motivation: string | null
          motivation2: string | null
          name: string | null
          profession: string | null
          profile_img: string | null
        }
        Insert: {
          created_at?: string
          current_job?: string | null
          current_office_url?: string | null
          desc?: string | null
          id?: number
          motivation?: string | null
          motivation2?: string | null
          name?: string | null
          profession?: string | null
          profile_img?: string | null
        }
        Update: {
          created_at?: string
          current_job?: string | null
          current_office_url?: string | null
          desc?: string | null
          id?: number
          motivation?: string | null
          motivation2?: string | null
          name?: string | null
          profession?: string | null
          profile_img?: string | null
        }
        Relationships: []
      }
      project: {
        Row: {
          created_at: string
          desc: string | null
          id: number
          image: string | null
          link: string | null
          title: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          desc?: string | null
          id?: number
          image?: string | null
          link?: string | null
          title?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          desc?: string | null
          id?: number
          image?: string | null
          link?: string | null
          title?: string | null
          type?: string | null
        }
        Relationships: []
      }
      project_tech: {
        Row: {
          created_at: string
          id: number
          project_id: number
          tech: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          project_id: number
          tech?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          project_id?: number
          tech?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_project_tech_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "project"
            referencedColumns: ["id"]
          },
        ]
      }
      skill: {
        Row: {
          created_at: string
          desc: string | null
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          desc?: string | null
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          desc?: string | null
          id?: number
          image?: string | null
          name?: string | null
        }
        Relationships: []
      }
      work_experience: {
        Row: {
          created_at: string
          desc: string | null
          id: number
          image: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          desc?: string | null
          id?: number
          image?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          desc?: string | null
          id?: number
          image?: string | null
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
