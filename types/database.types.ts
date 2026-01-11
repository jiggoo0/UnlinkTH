export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          created_at: string
          name: string
          phone: string
          email: string | null
          service_type:
            | 'google_removal'
            | 'blacklist_fix'
            | 'reputation_mgmt'
            | 'vip_consult'
          details: string | null
          status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          assigned_to: string | null
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          phone: string
          email?: string | null
          service_type:
            | 'google_removal'
            | 'blacklist_fix'
            | 'reputation_mgmt'
            | 'vip_consult'
          details?: string | null
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          assigned_to?: string | null
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          phone?: string
          email?: string | null
          service_type?:
            | 'google_removal'
            | 'blacklist_fix'
            | 'reputation_mgmt'
            | 'vip_consult'
          details?: string | null
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          assigned_to?: string | null
          notes?: string | null
        }
      }
      cases: {
        Row: {
          id: string
          created_at: string
          title: string
          category: string
          description: string
          outcome: string
          is_published: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          category: string
          description: string
          outcome: string
          is_published?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          category?: string
          description?: string
          outcome?: string
          is_published?: boolean
        }
      }
    }
  }
}

// Helper types for easy usage in components
export type Lead = Database['public']['Tables']['leads']['Row']
export type NewLead = Database['public']['Tables']['leads']['Insert']
export type CaseStudy = Database['public']['Tables']['cases']['Row']
